import type { ReactNode } from 'react'
import { useLang } from '../../i18n'
import type { Letter } from '../../types'
import './ParchmentLetter.css'

/** `action` is rendered centred at the bottom of the paper (e.g. the "next" button). */
export function ParchmentLetter({ letter, action }: { letter: Letter; action?: ReactNode }) {
  const { lang } = useLang()
  const text = (lang === 'en' && letter.en) || letter
  return (
    <article className="parchment-letter page-turn">
      <span className="parchment-detail" aria-hidden="true">❦</span>

      <h2 className="handwritten parchment-greeting">{text.title}</h2>

      <div className="parchment-message">
        {text.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <p className="handwritten parchment-signature">{text.signature}</p>

      {action && <div className="parchment-action">{action}</div>}
    </article>
  )
}
