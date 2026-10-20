import { useState } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
  /** Size classes for the placeholder shown when the file is missing. */
  fallbackClassName?: string
  /** Videos only: show play controls (otherwise just the first frame, e.g. a thumbnail). */
  playable?: boolean
  /** Videos only: true while playing, so the parent can pause the music. */
  onPlayingChange?: (playing: boolean) => void
}

const isVideo = (src: string) => /\.(mov|mp4|m4v|webm)$/i.test(src)

/** <img> (or <video> for clips) that falls back to a paper placeholder if the file is missing. */
export function PhotoImage({ src, alt, className, fallbackClassName = 'h-80 w-64', playable, onPlayingChange }: Props) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-(--paper-edge) text-4xl ${fallbackClassName}`}
        role="img"
        aria-label={alt}
      >
        📷
      </div>
    )
  }
  if (isVideo(src)) {
    return (
      <video
        className={className}
        // #t=0.1 makes browsers show the first frame instead of a blank box.
        src={`${src}#t=0.1`}
        aria-label={alt}
        controls={playable}
        muted={!playable}
        playsInline
        preload="metadata"
        onError={() => setFailed(true)}
        onPlay={() => onPlayingChange?.(true)}
        onPause={() => onPlayingChange?.(false)}
        onEnded={() => onPlayingChange?.(false)}
      />
    )
  }
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
