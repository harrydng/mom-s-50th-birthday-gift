import { config } from '../data/config'
import type { MusicControls } from '../hooks/useMusic'

const iconButton =
  'flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-lg text-(--accent-dark) transition hover:bg-(--accent)/10 disabled:opacity-40'

export function MusicPlayer({ music }: { music: MusicControls }) {
  const { track, playing } = music
  const label = track
    ? `${track.title} — ${track.artist}`
    : config.music.nothingPlaying

  return (
    <div className="flex w-[min(92vw,16rem)] items-center gap-2 rounded-xl border border-dashed border-(--accent)/30 bg-[#fff8ef]/95 px-3 py-2 shadow-sm">
      <p
        className="min-w-0 flex-1 truncate text-xs text-(--ink)"
        title={label}
      >
        {label}
      </p>

      <div className="flex shrink-0 items-center">
        <button
          className={iconButton}
          onClick={music.prev}
          disabled={!track}
          aria-label={config.music.prev}
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
            <path d="M5 5h2v14H5zm14 0v14L9 12z" />
          </svg>
        </button>

        <button
          className={iconButton}
          onClick={music.togglePlay}
          disabled={!track}
          aria-label={playing ? config.music.pause : config.music.play}
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
            <path d={playing ? 'M6 5h4v14H6zm8 0h4v14h-4z' : 'M8 5v14l11-7z'} />
          </svg>
        </button>

        <button
          className={iconButton}
          onClick={music.next}
          disabled={!track}
          aria-label={config.music.next}
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
            <path d="M17 5h2v14h-2zM5 5v14l10-7z" />
          </svg>
        </button>
      </div>
    </div>
  )
}