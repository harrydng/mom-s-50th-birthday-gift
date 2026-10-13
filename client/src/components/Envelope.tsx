import { useState } from 'react'
import { config } from '../data/config'
import { AnimatedEnvelope } from './AnimatedEnvelope'

interface Props {
  /** Called once the open animation has finished. */
  onOpened: () => void
  /** Called immediately on click (user gesture) — starts the music. */
  onOpenClick: () => void
  /** Jump past the letters straight to the photos. */
  onSkip: () => void
}

export function Envelope({ onOpened, onOpenClick, onSkip }: Props) {
  const [opening, setOpening] = useState(false)

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
      <AnimatedEnvelope
        onStart={() => {
          setOpening(true)
          onOpenClick()
        }}
        onOpen={onOpened}
      />
      <button
        className="cursor-pointer text-(--ink-soft) text-sm underline underline-offset-4 transition hover:text-(--accent-dark) disabled:opacity-40"
        onClick={() => {
          onOpenClick()
          onSkip()
        }}
        disabled={opening}
      >
        {config.envelope.skip}
      </button>
    </section>
  )
}
