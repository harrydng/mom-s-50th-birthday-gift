import { config } from '../../data/config'
import { PasswordForm } from './PasswordForm'
import './ParchmentLetter.css'

interface Props {
  onUnlock: () => void
  onSkip: () => void
}

/** Password screen shown on the paper before the letter can be read. */
export function LetterLock({ onUnlock, onSkip }: Props) {
  return (
    <article className="parchment-letter letter-lock page-turn">
      <h2 className="handwritten parchment-greeting">{config.letters.lockTitle}</h2>

      <PasswordForm onUnlock={onUnlock} label={config.letters.unlock} autoFocus />

      <button className="letter-lock-skip" type="button" onClick={onSkip}>
        {config.letters.noPassword}
      </button>
    </article>
  )
}
