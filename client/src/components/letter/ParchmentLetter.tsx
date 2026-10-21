import type { ReactNode } from 'react'
import type { Letter } from '../../types'
import './ParchmentLetter.css'

/** `action` is rendered centred at the bottom of the paper (e.g. the "next" button). */
export function ParchmentLetter({ letter, action }: { letter: Letter; action?: ReactNode }) {
  return (
    <article className="parchment-letter page-turn">
      <span className="parchment-detail" aria-hidden="true">❦</span>

      <h2 className="handwritten parchment-greeting">{letter.title}</h2>

      <div className="parchment-message">
        {letter.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <p className="handwritten parchment-signature">{letter.signature}</p>

      {action && <div className="parchment-action">{action}</div>}
    </article>
  )
}
