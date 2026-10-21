import { useState } from 'react'
import { useConfig } from '../../i18n'
import './ParchmentLetter.css' // .letter-next button
import './PasswordForm.css'

/** The password box used by both the letter and the video. */
interface Props {
  onUnlock: () => void
  /** Text on the submit button */
  label: string
  autoFocus?: boolean
}

export function PasswordForm({ onUnlock, label, autoFocus = false }: Props) {
  const config = useConfig()
  const [value, setValue] = useState('')
  const [wrong, setWrong] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // Forgiving about phones auto-capitalising or adding a space.
    if (value.trim().toLowerCase() === config.letters.password) onUnlock()
    else setWrong(true)
  }

  return (
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
        autoFocus={autoFocus}
      />
      <button className="letter-next" type="submit">{label}</button>
      <p className="letter-lock-error" role="alert">{wrong ? config.letters.wrongPassword : ''}</p>
    </form>
  )
}
