import { useState } from 'react'
import { config } from '../data/config'
import { letters } from '../data/letters'

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
  const isLast = page === letters.length - 1

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/10 p-3 backdrop-blur-[3px] animate-[fade-in_0.4s_ease_both] md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={config.letters.navLabel}
    >
      <div className="relative flex max-h-[94vh] w-full max-w-4xl flex-col rounded-3xl bg-(--paper)/95 px-6 py-8 shadow-2xl md:px-16 md:py-12">
        {onClose && (
          <button
            className="absolute right-5 top-3 cursor-pointer text-4xl text-(--ink-soft)"
            onClick={onClose}
            aria-label={config.letters.close}
          >
            ×
          </button>
        )}

        <div className="page-turn min-h-0 flex-1 overflow-y-auto pr-2" key={letter.id}>
          <h2 className="handwritten mb-6 text-5xl leading-tight text-(--accent-dark) md:text-6xl">{letter.title}</h2>
          {letter.paragraphs.map((p, i) => (
            <p key={i} className="mb-5 text-xl leading-relaxed md:text-2xl md:leading-loose">{p}</p>
          ))}
          <p className="handwritten mt-8 text-right text-4xl text-(--accent-dark)">{letter.signature}</p>
        </div>

        <div className="mt-6 flex items-center justify-between gap-2">
          <button className="btn" onClick={() => setPage(page - 1)} disabled={page === 0}>
            {config.letters.prev}
          </button>
          <span className="counter">{page + 1} / {letters.length}</span>
          {isLast ? (
            <button className="btn btn-primary" onClick={onFinish}>{finishLabel}</button>
          ) : (
            <button className="btn btn-primary" onClick={() => setPage(page + 1)}>{config.letters.next}</button>
          )}
        </div>
      </div>
    </div>
  )
}
