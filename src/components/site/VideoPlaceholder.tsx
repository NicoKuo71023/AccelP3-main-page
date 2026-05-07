import { Play } from "lucide-react";
import { useRef, useState } from "react";

export function VideoPlaceholder({ label, src }: { label: string; src?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    setIsPlaying(true);
    window.requestAnimationFrame(() => {
      videoRef.current?.play();
    });
  };

  if (src) {
    return (
      <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-border shadow-soft bg-black">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition duration-500 ${
            isPlaying ? "opacity-100" : "opacity-45"
          }`}
          controls={isPlaying}
          preload="metadata"
          aria-label={label}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <button
            type="button"
            aria-label={`Play ${label}`}
            onClick={playVideo}
            className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-white/65 text-center backdrop-blur-[1px] transition hover:bg-white/55"
          >
            <span className="absolute inset-0 bg-hero-accent opacity-20" />
            <span className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105">
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              <Play className="relative ml-1" size={28} fill="currentColor" />
            </span>
            <span className="relative text-sm font-semibold text-navy/80 tracking-wide uppercase">
              {label}
            </span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-border shadow-soft bg-gradient-to-br from-[oklch(0.95_0.03_195)] via-[oklch(0.97_0.02_175)] to-[oklch(0.92_0.05_210)]">
      <div className="absolute inset-0 bg-hero-accent opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <button
          aria-label="Play video"
          className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
          <Play className="relative ml-1" size={28} fill="currentColor" />
        </button>
        <p className="text-sm font-semibold text-navy/80 tracking-wide uppercase">{label}</p>
        <p className="text-xs text-muted-foreground">Video coming soon</p>
      </div>
    </div>
  );
}
