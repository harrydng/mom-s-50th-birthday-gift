import { useState } from 'react'
import { config } from '../../data/config'
import './ParchmentLetter.css'

interface Props {
  onUnlock: () => void
  onSkip: () => void
}

/** Password screen shown on the paper before the letter can be read. */
export function LetterLock({ onUnlock, onSkip }: Props) {
  const [value, setValue] = useState('')
  const [wrong, setWrong] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // Forgiving about phones auto-capitalising or adding a space.
    if (value.trim().toLowerCase() === config.letters.password) onUnlock()
    else setWrong(true)
  }

  return (
    <article className="parchment-letter letter-lock page-turn">
      <h2 className="handwritten parchment-greeting">{config.letters.lockTitle}</h2>

      <form className="letter-lock-form" onSubmit={submit}>
        <input
          className="letter-lock-input"
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setWrong(false)
          }}
          placeholder={config.letters.passwordPlaceholder}
          aria-label={config.letters.passwordPlaceholder}
          aria-invalid={wrong}
          autoComplete="off"
          autoCapitalize="none"
          autoFocus
        />
        <button className="letter-next" type="submit">{config.letters.unlock}</button>
        <p className="letter-lock-error" role="alert">{wrong ? config.letters.wrongPassword : ''}</p>
      </form>

      <button className="letter-lock-skip" type="button" onClick={onSkip}>
        {config.letters.noPassword}
      </button>
    </article>
  )
}
