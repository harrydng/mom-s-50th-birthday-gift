import { useState } from 'react'
import { config } from '../data/config'

interface Props {
  /** Called once the open animation has finished. */
  onOpened: () => void
  /** Called immediately on click (user gesture) — starts the music. */
  onOpenClick: () => void
}

export function Envelope({ onOpened, onOpenClick }: Props) {
  const [opening, setOpening] = useState(false)

  const open = () => {
    if (opening) return
    setOpening(true)
    onOpenClick()
    window.setTimeout(onOpened, 1500)
  }

  return (
    <section className="envelope-screen">
      <p className="handwritten envelope-greeting">{config.envelope.greeting}</p>
      <div className={`envelope ${opening ? 'is-open' : ''}`}>
        <div className="envelope-back" />
        <div className="envelope-letter" />
        <div className="envelope-front" />
        <div className="envelope-flap" />
        <span className="envelope-heart">💌</span>
      </div>
      <button className="btn btn-primary" onClick={open} disabled={opening}>
        {config.envelope.button}
      </button>
    </section>
  )
}
