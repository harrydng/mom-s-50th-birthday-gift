import { PhotoImage } from './PhotoImage'
import './PhotoMemory.css'

interface Props {
  src: string
  year: string
  message: string
  title?: string
  stage?: string
  alt?: string
}

export function PhotoMemory({
  src,
  year,
  message,
  title,
  stage,
  alt,
}: Props) {
  return (
    <div className="memory-spread">
      <figure className="memory-photo">
        <span className="memory-tape" aria-hidden="true" />

        <PhotoImage
          src={src}
          alt={alt ?? `Kỷ niệm năm ${year}`}
          className="memory-photo-image"
          fallbackClassName="memory-photo-fallback"
        />

        <figcaption className="handwritten">
          {year}
        </figcaption>
      </figure>

      <div className="memory-note-wrap">
        <article className="memory-note">
          <span className="memory-note-tape" aria-hidden="true" />

          <p className="memory-note-label">
            {stage ? `${stage} · ${year}` : year}
          </p>

          <h2 className="handwritten memory-note-title">
            {title || 'Một chút thương nhớ'}
          </h2>

          <div className="memory-note-divider" aria-hidden="true" />

          <p className="memory-note-message">{message}</p>

          <div className="memory-note-footer">
            <span className="handwritten">Gửi mẹ, với yêu thương</span>

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
