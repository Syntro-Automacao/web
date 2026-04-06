import Image from "next/image";

interface GearsSpinnerProps {
  size?: number;
  className?: string;
  text?: string;
}

export function GearsSpinner({
  size = 64,
  className = "",
  text = "Carregando...",
}: GearsSpinnerProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Image
        src="/assets/gears-spinner.svg"
        alt="Loading..."
        width={size}
        height={size}
        className="animate-spin"
        priority={false}
      />
      {text && <span className="text-sm text-gray-400 mt-2">{text}</span>}
    </div>
  );
}
