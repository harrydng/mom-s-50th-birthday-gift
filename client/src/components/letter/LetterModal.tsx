import { useState } from 'react'
import { config } from '../../data/config'
import { letters } from '../../data/letters'
import { ParchmentLetter } from './ParchmentLetter'

interface Props {
  /** Label for the final-page action button. */
  finishLabel: string
  onFinish: () => void
  /** Omit to hide the × (first read, before the album is unlocked). */
  onClose?: () => void
}

export function LetterModal({ finishLabel, onFinish, onClose }: Props) {
  const [page, setPage] = useState(0)
  const letter = letters[page]

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/10 backdrop-blur-[3px] animate-[fade-in_0.4s_ease_both] px-3 pb-3 pt-28 md:pt-40"
      role="dialog"
      aria-modal="true"
      aria-label={config.letters.navLabel}
    >
      <div className="relative flex max-h-[calc(100dvh-8rem)] md:max-h-[calc(100dvh-11rem)] w-full flex-col items-center">
        {onClose && (
          <button
            className="absolute right-3 top-1 z-10 cursor-pointer text-4xl text-(--ink-soft)"
            onClick={onClose}
            aria-label={config.letters.close}
          >
            ×
          </button>
        )}

        <div className="min-h-0 w-full flex-1 overflow-y-auto">
          <ParchmentLetter key={letter.id} letter={letter} />
        </div>

        <div className="mt-1 flex flex-wrap items-center justify-center gap-2 px-3 py-2 md:gap-3">
          {letters.map((l, i) => (
            <button
              key={l.id}
              className={`btn ${i === page ? 'btn-primary' : ''}`}
              onClick={() => setPage(i)}
              aria-pressed={i === page}
            >
              {l.tabLabel}
            </button>
          ))}
          <button className="btn" onClick={onFinish}>{finishLabel}</button>
        </div>
      </div>
    </div>
  )
}
