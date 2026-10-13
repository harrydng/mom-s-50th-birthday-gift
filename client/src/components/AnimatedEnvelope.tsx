import { useRef, useState } from 'react'
import './AnimatedEnvelope.css'

interface Props {
  /** Called immediately on click (user gesture) — used to start the music. */
  onStart?: () => void
  /** Called once the open animation has finished. */
  onOpen: () => void
}

export function AnimatedEnvelope({ onStart, onOpen }: Props) {
  const [opening, setOpening] = useState(false)
  const started = useRef(false)
  const completed = useRef(false)

  function open() {
    if (started.current) return
    started.current = true
    setOpening(true)
    onStart?.()
  }

  return (
    <div className="letter-gift">
      <button
        type="button"
        className={`keepsake-envelope ${opening ? 'is-opening' : ''}`}
        onClick={open}
        disabled={opening}
        aria-label="Mở thư gửi mẹ"
      >
        <span className="keepsake-back" />

        <span
          className="keepsake-letter"
          onAnimationEnd={(event) => {
            if (
              event.target !== event.currentTarget ||
              !opening ||
              completed.current
            ) return

            completed.current = true
            onOpen()
          }}
        >
          <span className="handwritten">Gửi mẹ,</span>
          <span className="letter-rule" />
          <span className="letter-rule" />
          <span className="letter-rule short" />
          <span className="letter-love">Với tất cả yêu thương</span>
        </span>

        <span className="keepsake-flap" />
        <span className="keepsake-left" />
        <span className="keepsake-right" />
        <span className="keepsake-bottom" />

        <svg
          className="keepsake-sprig"
          viewBox="0 0 100 120"
          fill="none"
          aria-hidden="true"
        >
          <g stroke="#92764f" strokeWidth="2" strokeLinecap="round">
            <path d="M80 110Q50 70 40 15M65 87L30 70M56 65L75 40M47 42L22 27" />
          </g>
          <g fill="#ad956b">
            <ellipse cx="30" cy="68" rx="5" ry="10" transform="rotate(-50 30 68)" />
            <ellipse cx="74" cy="39" rx="5" ry="10" transform="rotate(35 74 39)" />
            <ellipse cx="23" cy="27" rx="5" ry="9" transform="rotate(-45 23 27)" />
          </g>
          <g fill="#c88f83" opacity=".85">
            <ellipse cx="40" cy="15" rx="6" ry="11" />
            <ellipse cx="40" cy="15" rx="6" ry="11" transform="rotate(60 40 15)" />
            <ellipse cx="40" cy="15" rx="6" ry="11" transform="rotate(120 40 15)" />
          </g>
          <circle cx="40" cy="15" r="4" fill="#af875d" />
        </svg>

        <span className="keepsake-seal">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path
              d="M16 26S4 18 4 11a6 6 0 0 1 12-1 6 6 0 0 1 12 1c0 7-12 15-12 15Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </span>
      </button>
    </div>
  )
}
