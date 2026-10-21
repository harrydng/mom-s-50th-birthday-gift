import { useState } from 'react'
import { config } from '../../data/config'
import { letters } from '../../data/letters'
import { LetterLock } from './LetterLock'
import { ParchmentLetter } from './ParchmentLetter'

interface Props {
  /** Label for the final-page action button. */
  finishLabel: string
  onFinish: () => void
  /** Omit to hide the × (first read, before the album is unlocked). */
  onClose?: () => void
  /** Set by the parent to fade the letter out (e.g. when skipping ahead). */
  fadeOut?: boolean
  /** False = show the password screen instead of the letter. */
  unlocked: boolean
  onUnlock: () => void
  /** "No password": go to the timeline, the letter stays locked. */
  onSkip: () => void
}

/** How long the letter takes to fade out (keep in step with fade-out_0.6s below). */
const LEAVE_MS = 600

export function LetterModal({ finishLabel, onFinish, onClose, fadeOut = false, unlocked, onUnlock, onSkip }: Props) {
  const [leaving, setLeaving] = useState(false)
  const letter = letters[0]

  // Fade the letter away first, then hand over, so the album can fade in softly.
  const leave = (done: () => void) => {
    if (leaving) return
    setLeaving(true)
    window.setTimeout(done, LEAVE_MS)
  }

  return (
    <div
      className={`fixed inset-0 z-20 flex items-center justify-center bg-black/10 backdrop-blur-[3px] px-3 pb-3 pt-28 md:pt-40 ${
        leaving || fadeOut ? 'pointer-events-none animate-[fade-out_0.6s_ease_both]' : 'animate-[fade-in_0.4s_ease_both]'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={config.letters.navLabel}
    >
      <div className="relative flex max-h-[calc(100dvh-8rem)] md:max-h-[calc(100dvh-11rem)] w-full flex-col items-center">
        {onClose && (
          <button
            className="absolute right-3 top-1 z-10 cursor-pointer text-4xl text-(--ink-soft)"
            onClick={() => leave(onClose)}
            aria-label={config.letters.close}
          >
            ×
          </button>
        )}

        <div className="min-h-0 w-full flex-1 overflow-y-auto">
          {unlocked ? (
            <ParchmentLetter
              key={letter.id}
              letter={letter}
              action={
                <button className="letter-next" onClick={() => leave(onFinish)}>
                  {finishLabel}
                </button>
              }
            />
          ) : (
            <LetterLock onUnlock={onUnlock} onSkip={onSkip} />
          )}
        </div>
      </div>
    </div>
  )
}
