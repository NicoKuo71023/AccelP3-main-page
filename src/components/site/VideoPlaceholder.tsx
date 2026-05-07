import { Pause, Play, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";

export function VideoPlaceholder({
  label,
  maskTop = false,
  src,
}: {
  label: string;
  maskTop?: boolean;
  src?: string;
}) {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) return;

    if (hasEnded) {
      video.currentTime = 0;
      setCurrentTime(0);
      setHasEnded(false);
      setHasStarted(true);
      video.play();
      return;
    }

    if (video.paused) {
      setHasStarted(true);
      setHasEnded(false);
      video.play();
    } else {
      video.pause();
    }
  };

  const seekVideo = (value: string) => {
    const video = videoRef.current;
    const nextTime = Number(value);

    setCurrentTime(nextTime);
    if (video) {
      video.currentTime = nextTime;
      setHasEnded(false);
    }
  };

  if (src) {
    return (
      <div className="group relative aspect-video w-full rounded-3xl overflow-hidden border border-border shadow-soft bg-black">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition duration-500 ${
            hasStarted ? "opacity-100" : "opacity-45"
          }`}
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
          preload="metadata"
          aria-label={label}
          onPlay={() => {
            setHasStarted(true);
            setHasEnded(false);
            setIsPlaying(true);
          }}
          onPause={() => setIsPlaying(false)}
          onLoadedMetadata={() => {
            setDuration(videoRef.current?.duration || 0);
          }}
          onTimeUpdate={() => {
            setCurrentTime(videoRef.current?.currentTime || 0);
          }}
          onEnded={() => {
            setHasEnded(true);
            setIsPlaying(false);
          }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {maskTop && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[18%] bg-[#0b5570]"
          />
        )}
        <button
          type="button"
          aria-label={`${isPlaying ? "Pause" : "Play"} ${label}`}
          onClick={togglePlayback}
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 text-center transition ${
            hasEnded
              ? "bg-black/10 opacity-100"
              : hasStarted
              ? "bg-transparent opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
              : "bg-white/65 backdrop-blur-[1px] hover:bg-white/55"
          }`}
        >
          {!hasStarted && (
            <span className="absolute inset-0 bg-hero-accent opacity-20" />
          )}
          <span className="relative z-20 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105">
            {!hasStarted && (
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
            )}
            {hasEnded ? (
              <RotateCcw className="relative" size={30} />
            ) : isPlaying ? (
              <Pause className="relative" size={30} fill="currentColor" />
            ) : (
              <Play className="relative ml-1" size={28} fill="currentColor" />
            )}
          </span>
          {hasEnded && (
            <span className="relative text-sm font-semibold text-white tracking-wide uppercase">
              Replay
            </span>
          )}
          {!hasStarted && !hasEnded && (
            <span className="relative text-sm font-semibold text-navy/80 tracking-wide uppercase">
              {label}
            </span>
          )}
        </button>
        {hasStarted && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-5 pb-4 pt-10 bg-gradient-to-t from-black/45 to-transparent opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <div className="relative h-5">
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 overflow-hidden rounded-full bg-white/35"
              >
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${progress}%` }}
                />
              </div>
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.01"
              value={Math.min(currentTime, duration || currentTime)}
              aria-label={`Seek ${label}`}
              onChange={(event) => seekVideo(event.target.value)}
              className="absolute inset-0 z-30 h-5 w-full cursor-pointer appearance-none bg-transparent outline-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:shadow-soft [&::-moz-range-track]:bg-transparent [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-soft"
            />
            </div>
          </div>
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
