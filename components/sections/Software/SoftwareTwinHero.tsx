"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { TrackedWhatsAppLink } from "@/components/analytics/ClientTrackedLinks";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Projeção isométrica                                                        */
/* -------------------------------------------------------------------------- */

type V3 = [number, number, number];
type Box = { x: number; y: number; z: number; w: number; d: number; h: number };

const ISO_COS = Math.cos(Math.PI / 6);
const ISO_SIN = Math.sin(Math.PI / 6);

/** Converte um ponto 3D (x = comprimento, y = largura, z = altura) em 2D isométrico. */
const iso = ([x, y, z]: V3): [number, number] => [
  (x - y) * ISO_COS,
  (x + y) * ISO_SIN - z,
];

const point = (v: V3) => {
  const [sx, sy] = iso(v);
  return `${sx.toFixed(2)},${sy.toFixed(2)}`;
};

const polygon = (...v: V3[]) => v.map(point).join(" ");

const segment = (a: V3, b: V3) => {
  const [x1, y1] = iso(a);
  const [x2, y2] = iso(b);
  return { x1, y1, x2, y2 };
};

const boxCorners = (b: Box): V3[] => {
  const x2 = b.x + b.w;
  const y2 = b.y + b.d;
  const z2 = b.z + b.h;
  return [
    [b.x, b.y, b.z],
    [x2, b.y, b.z],
    [b.x, y2, b.z],
    [x2, y2, b.z],
    [b.x, b.y, z2],
    [x2, b.y, z2],
    [b.x, y2, z2],
    [x2, y2, z2],
  ];
};

/** Faces visíveis (topo, lateral direita em +x, lateral esquerda em +y). */
const boxFaces = (b: Box) => {
  const { x, y, z } = b;
  const x2 = x + b.w;
  const y2 = y + b.d;
  const z2 = z + b.h;
  return {
    top: polygon([x, y, z2], [x2, y, z2], [x2, y2, z2], [x, y2, z2]),
    right: polygon([x2, y, z], [x2, y2, z], [x2, y2, z2], [x2, y, z2]),
    left: polygon([x, y2, z], [x2, y2, z], [x2, y2, z2], [x, y2, z2]),
  };
};

/* -------------------------------------------------------------------------- */
/*  Geometria da célula robótica                                               */
/* -------------------------------------------------------------------------- */

// Esteira transportadora — pernas, estrutura e lona
const CONVEYOR: Box[] = [
  { x: 0, y: 0, z: 0, w: 24, d: 24, h: 46 },
  { x: 0, y: 116, z: 0, w: 24, d: 24, h: 46 },
  { x: 396, y: 0, z: 0, w: 24, d: 24, h: 46 },
  { x: 396, y: 116, z: 0, w: 24, d: 24, h: 46 },
  { x: -8, y: -8, z: 46, w: 436, d: 156, h: 30 },
];
const BELT: Box[] = [{ x: 8, y: 8, z: 76, w: 404, d: 124, h: 8 }];

// Pórtico — duas colunas que cruzam a esteira
const COLUMNS: Box[] = [
  { x: 150, y: -72, z: 0, w: 44, d: 44, h: 200 },
  { x: 150, y: 178, z: 0, w: 44, d: 44, h: 200 },
];

// Eixo cartesiano X — viga, carro móvel e eixo vertical (ponto 02)
const AXIS: Box[] = [
  { x: 146, y: -84, z: 200, w: 52, d: 314, h: 26 },
  { x: 132, y: 54, z: 214, w: 76, d: 96, h: 44 },
  { x: 164, y: 96, z: 150, w: 12, d: 12, h: 66 },
];

// Sensor de inspeção na ponta do eixo vertical (ponto 03)
const SENSOR: Box[] = [
  { x: 152, y: 84, z: 116, w: 36, d: 36, h: 34 },
  { x: 164, y: 96, z: 104, w: 12, d: 12, h: 12 },
];

// Peça sobre a lona
const WORKPIECE: Box[] = [{ x: 154, y: 86, z: 84, w: 32, d: 32, h: 20 }];

// Painel elétrico com o CLP da célula (ponto 01)
const PANEL: Box[] = [
  { x: 294, y: -156, z: 0, w: 162, d: 132, h: 14 },
  { x: 300, y: -150, z: 14, w: 150, d: 120, h: 156 },
  { x: 450, y: -142, z: 24, w: 6, d: 104, h: 132 },
  { x: 456, y: -118, z: 92, w: 4, d: 56, h: 40 },
  { x: 456, y: -66, z: 62, w: 12, d: 10, h: 34 },
];

// Calha de cabos ligando o painel ao pórtico
const DUCT: Box[] = [{ x: 198, y: -58, z: 182, w: 108, d: 16, h: 12 }];

const STRUCTURE = [...COLUMNS, ...DUCT];
const SCENE_BOXES = [...CONVEYOR, ...BELT, ...STRUCTURE, ...AXIS, ...SENSOR, ...WORKPIECE, ...PANEL];

// Malha discreta sob a máquina
const range = (from: number, to: number, step: number) => {
  const values: number[] = [];
  for (let v = from; v <= to + 1e-6; v += step) {
    values.push(Math.round(v * 100) / 100);
  }
  return values;
};

const GRID_X = range(-60, 460, 65);
const GRID_Y = range(-80, 200, 70);
const GRID_EXTENT: V3[] = [
  [GRID_X[0], GRID_Y[0], 0],
  [GRID_X[GRID_X.length - 1], GRID_Y[0], 0],
  [GRID_X[0], GRID_Y[GRID_Y.length - 1], 0],
  [GRID_X[GRID_X.length - 1], GRID_Y[GRID_Y.length - 1], 0],
];
const GRID_LINES = [
  ...GRID_X.map((x) => segment([x, GRID_Y[0], 0], [x, GRID_Y[GRID_Y.length - 1], 0])),
  ...GRID_Y.map((y) => segment([GRID_X[0], y, 0], [GRID_X[GRID_X.length - 1], y, 0])),
];

// Linhas técnicas do eixo X (cota acima da viga)
const AXIS_ANNOTATION = [
  segment([172, -104, 246], [172, 250, 246]),
  segment([172, -104, 238], [172, -104, 254]),
  segment([172, 250, 238], [172, 250, 254]),
];

/* -------------------------------------------------------------------------- */
/*  Enquadramento automático                                                   */
/* -------------------------------------------------------------------------- */

const PAD = 28;
const PROJECTED_BOUNDS = [...SCENE_BOXES.flatMap(boxCorners), ...GRID_EXTENT, [172, -104, 254] as V3].map(iso);
const BOUND_MIN_X = Math.min(...PROJECTED_BOUNDS.map((p) => p[0])) - PAD;
const BOUND_MAX_X = Math.max(...PROJECTED_BOUNDS.map((p) => p[0])) + PAD;
const BOUND_MIN_Y = Math.min(...PROJECTED_BOUNDS.map((p) => p[1])) - PAD;
const BOUND_MAX_Y = Math.max(...PROJECTED_BOUNDS.map((p) => p[1])) + PAD;

const VIEW_BOX = {
  x: BOUND_MIN_X,
  y: BOUND_MIN_Y,
  w: BOUND_MAX_X - BOUND_MIN_X,
  h: BOUND_MAX_Y - BOUND_MIN_Y,
};
const VIEW_BOX_ATTR = `${VIEW_BOX.x.toFixed(2)} ${VIEW_BOX.y.toFixed(2)} ${VIEW_BOX.w.toFixed(
  2,
)} ${VIEW_BOX.h.toFixed(2)}`;
const VIEW_BOX_ASPECT = `${VIEW_BOX.w.toFixed(2)} / ${VIEW_BOX.h.toFixed(2)}`;

/** Posição percentual (relativa ao viewBox) de um ponto 3D — mantém os pontos alinhados em qualquer tamanho. */
const hotspotPosition = (p: V3) => {
  const [sx, sy] = iso(p);
  return {
    left: `${(((sx - VIEW_BOX.x) / VIEW_BOX.w) * 100).toFixed(3)}%`,
    top: `${(((sy - VIEW_BOX.y) / VIEW_BOX.h) * 100).toFixed(3)}%`,
  };
};

/* -------------------------------------------------------------------------- */
/*  Tons / componentes                                                         */
/* -------------------------------------------------------------------------- */

type Tone = "structure" | "rail" | "belt" | "panel" | "active";

const TONES: Record<Tone, { top: string; right: string; left: string }> = {
  structure: { top: "fill-slate-600", right: "fill-slate-700", left: "fill-slate-800" },
  rail: { top: "fill-slate-500", right: "fill-slate-600", left: "fill-slate-700" },
  belt: { top: "fill-slate-700", right: "fill-slate-800", left: "fill-slate-900" },
  panel: { top: "fill-slate-400", right: "fill-slate-500", left: "fill-slate-600" },
  active: { top: "fill-cyan-300", right: "fill-cyan-400", left: "fill-cyan-500" },
};

const FACE_TRANSITION = "transition-colors duration-300 ease-out";

function Cuboid({ box, tone, active = false }: { box: Box; tone: Tone; active?: boolean }) {
  const faces = boxFaces(box);
  const palette = active ? TONES.active : TONES[tone];
  return (
    <>
      <polygon points={faces.left} className={cn(palette.left, FACE_TRANSITION)} />
      <polygon points={faces.right} className={cn(palette.right, FACE_TRANSITION)} />
      <polygon points={faces.top} className={cn(palette.top, FACE_TRANSITION)} />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pontos interativos                                                         */
/* -------------------------------------------------------------------------- */

type Hotspot = {
  id: string;
  number: string;
  name: string;
  reading: string;
  at: V3;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: "plc",
    number: "01",
    name: "CLP da célula",
    reading: "Comunicação industrial · Conectado",
    at: [456, -92, 130],
  },
  {
    id: "axis",
    number: "02",
    name: "Eixo cartesiano X",
    reading: "Posição simulada · 428 mm",
    at: [200, 4, 213],
  },
  {
    id: "sensor",
    number: "03",
    name: "Sensor de inspeção",
    reading: "Leitura de presença · Peça detectada",
    at: [172, 104, 132],
  },
];

const DEFAULT_HOTSPOT_ID = "axis";

/* -------------------------------------------------------------------------- */
/*  Seção                                                                      */
/* -------------------------------------------------------------------------- */

const WHATSAPP_HREF =
  "https://wa.me/+5519996362101?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20de%20projeto%20de%20softwares%20industriais.";

type Props = {
  /** Texto do título antes do destaque (ex.: "Sua linha de produção em Valinhos,"). */
  titlePrefix?: string;
  /** Trecho do título em destaque ciano. */
  titleAccent?: string;
  description?: string;
  ctaLabel?: string;
  whatsappHref?: string;
  ctaName?: string;
  location?: string;
};

export function SoftwareTwinHero({
  titlePrefix = "Sua linha de produção,",
  titleAccent = "em tempo real.",
  description = "Conectamos CLPs, robôs e sensores em um supervisório desenvolvido para sua operação.",
  ctaLabel = "Solicitar análise do projeto",
  whatsappHref = WHATSAPP_HREF,
  ctaName = "orcamento_software_whatsapp",
  location = "softwares_hero",
}: Props = {}) {
  const [activeId, setActiveId] = useState(DEFAULT_HOTSPOT_ID);
  const active = HOTSPOTS.find((h) => h.id === activeId) ?? HOTSPOTS[1];

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-slate-950 text-white">
      {/* Fundo técnico */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_-10%,rgba(34,211,238,0.16),transparent_60%),radial-gradient(90%_70%_at_0%_100%,rgba(0,155,219,0.18),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:52px_52px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-950"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14 lg:px-8 lg:pb-16 lg:pt-32">
        {/* Coluna de texto */}
        <Reveal className="max-w-xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:text-sm">
            <span aria-hidden="true" className="h-px w-8 bg-cyan-400/60" />
            SCADA · Automação · IoT
          </p>

          <h1 className="mt-5 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
            {titlePrefix}{" "}
            <span className="text-cyan-300">{titleAccent}</span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </p>

          <div className="mt-8">
            <TrackedWhatsAppLink
              ctaName={ctaName}
              location={location}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              {ctaLabel}
            </TrackedWhatsAppLink>
          </div>
        </Reveal>

        {/* Célula robótica interativa */}
        <Reveal delay={0.12} className="w-full">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-3 shadow-2xl backdrop-blur-sm sm:p-5">
            <header className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Célula robótica
              </span>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                Dados simulados
              </span>
            </header>

            <div className="relative mt-4" style={{ aspectRatio: VIEW_BOX_ASPECT }}>
              <svg
                viewBox={VIEW_BOX_ATTR}
                className="h-full w-full"
                role="img"
                aria-label="Ilustração isométrica de uma célula robótica: robô cartesiano tipo pórtico sobre uma esteira transportadora, com painel elétrico, carro móvel, eixo vertical e sensor de inspeção."
              >
                <title>Célula robótica com robô cartesiano tipo pórtico</title>

                {/* Malha sob a máquina */}
                <g className="text-slate-400/20">
                  {GRID_LINES.map((l, i) => (
                    <line
                      key={`grid-${i}`}
                      {...l}
                      stroke="currentColor"
                      strokeWidth={1}
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </g>

                {/* Painel elétrico — ponto 01 */}
                <g
                  style={active.id === "plc" ? { filter: "drop-shadow(0 0 10px rgba(34,211,238,0.55))" } : undefined}
                >
                  {PANEL.map((box, i) => (
                    <Cuboid key={`panel-${i}`} box={box} tone="panel" active={active.id === "plc"} />
                  ))}
                </g>

                {/* Esteira */}
                {CONVEYOR.map((box, i) => (
                  <Cuboid key={`conv-${i}`} box={box} tone="structure" />
                ))}
                {BELT.map((box, i) => (
                  <Cuboid key={`belt-${i}`} box={box} tone="belt" />
                ))}

                {/* Peça sobre a lona */}
                {WORKPIECE.map((box, i) => (
                  <Cuboid key={`wp-${i}`} box={box} tone="rail" />
                ))}

                {/* Pórtico e calha de cabos */}
                {STRUCTURE.map((box, i) => (
                  <Cuboid key={`str-${i}`} box={box} tone="structure" />
                ))}

                {/* Eixo cartesiano X — ponto 02 */}
                <g
                  style={active.id === "axis" ? { filter: "drop-shadow(0 0 10px rgba(34,211,238,0.55))" } : undefined}
                >
                  {AXIS.map((box, i) => (
                    <Cuboid key={`axis-${i}`} box={box} tone="rail" active={active.id === "axis"} />
                  ))}
                </g>

                {/* Cota do eixo */}
                <g className="text-cyan-300/35">
                  {AXIS_ANNOTATION.map((l, i) => (
                    <line
                      key={`ann-${i}`}
                      {...l}
                      stroke="currentColor"
                      strokeWidth={1}
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </g>

                {/* Sensor de inspeção — ponto 03 */}
                <g
                  style={active.id === "sensor" ? { filter: "drop-shadow(0 0 10px rgba(34,211,238,0.55))" } : undefined}
                >
                  {SENSOR.map((box, i) => (
                    <Cuboid key={`sensor-${i}`} box={box} tone="rail" active={active.id === "sensor"} />
                  ))}
                </g>
              </svg>

              {/* Pontos numerados sobre os componentes */}
              {HOTSPOTS.map((h) => {
                const isActive = h.id === active.id;
                return (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setActiveId(h.id)}
                    aria-pressed={isActive}
                    aria-label={`Ponto ${h.number}: ${h.name}`}
                    title={`${h.number} · ${h.name}`}
                    style={hotspotPosition(h.at)}
                    className="absolute z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-cyan-400/25 motion-reduce:animate-none"
                      />
                    )}
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[11px] font-semibold transition-colors duration-300 ease-out",
                        isActive
                          ? "border-cyan-200 bg-cyan-400 text-slate-950 shadow-[0_0_14px_rgba(34,211,238,0.75)]"
                          : "border-white/40 bg-slate-900/85 text-slate-200 hover:border-cyan-300/70 hover:text-white",
                      )}
                    >
                      {h.number}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Leitura do componente selecionado */}
            <div
              aria-live="polite"
              className="mt-3 rounded-xl border border-white/10 bg-slate-950/70 p-4 sm:mt-4"
            >
              <div
                key={active.id}
                className="animate-in fade-in slide-in-from-bottom-1 duration-300 motion-reduce:animate-none"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-cyan-400/30 bg-cyan-400/10 font-mono text-[11px] font-semibold text-cyan-300">
                    {active.number}
                  </span>
                  <span className="text-sm font-semibold text-white">{active.name}</span>
                  <span className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300/80">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 motion-reduce:animate-none"
                    />
                    Leitura
                  </span>
                </div>
                <p className="mt-3 font-mono text-sm text-cyan-100 sm:text-base">{active.reading}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
