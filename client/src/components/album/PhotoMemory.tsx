import { useConfig } from '../../i18n'
import { PhotoImage } from './PhotoImage'
import './PhotoMemory.css'

interface Props {
  src: string
  year: string
  message: string
  title?: string
  stage?: string
  alt?: string
  /** For video clips: true while playing. */
  onPlayingChange?: (playing: boolean) => void
}

export function PhotoMemory({
  src,
  year,
  message,
  title,
  stage,
  alt,
  onPlayingChange,
}: Props) {
  const config = useConfig()
  return (
    <div className="memory-spread">
      <figure className="memory-photo">
        <span className="memory-tape" aria-hidden="true" />

        <PhotoImage
          src={src}
          alt={alt ?? (year ? `${config.memory.altWithYear} ${year}` : config.memory.defaultTitle)}
          className="memory-photo-image"
          fallbackClassName="memory-photo-fallback"
          playable
          onPlayingChange={onPlayingChange}
        />

        {year && (
          <figcaption className="handwritten">
            {year}
          </figcaption>
        )}
      </figure>

      <div className="memory-note-wrap">
        <article className="memory-note">
          <span className="memory-note-tape" aria-hidden="true" />

          <p className="memory-note-label">
            {[stage, year].filter(Boolean).join(' · ')}
          </p>

          <h2 className="handwritten memory-note-title">
            {title || config.memory.defaultTitle}
          </h2>

          <div className="memory-note-divider" aria-hidden="true" />

          <p className="memory-note-message">{message}</p>

          <div className="memory-note-footer">
            <span className="handwritten">{config.memory.footer}</span>

            <svg
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M16 26S4 18 4 11a6 6 0 0 1 12-1 6 6 0 0 1 12 1c0 7-12 15-12 15Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </article>
      </div>
    </div>
  )
}
