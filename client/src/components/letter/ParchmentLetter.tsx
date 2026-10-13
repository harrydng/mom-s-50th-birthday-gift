import type { Letter } from '../../types'
import './ParchmentLetter.css'

export function ParchmentLetter({ letter }: { letter: Letter }) {
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
    </article>
  )
}
