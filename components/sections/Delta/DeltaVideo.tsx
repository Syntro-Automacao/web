"use client";

import YouTube, { YouTubeProps } from "react-youtube";

type Props = {
  videoId: string;
};

export function DeltaVideo({ videoId }: Props) {
  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "450",
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      loop: 1,
      playlist: videoId,
    },
  };

  const onError: YouTubeProps["onError"] = (e) => {
    console.error("YouTube error", e.data);
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <YouTube videoId={videoId} opts={opts} onError={onError} />
    </div>
  );
}
