import { config } from '../../data/config'

interface Props {
  onStay: () => void
  onLeave: () => void
}

export function SkipDialog({ onStay, onLeave }: Props) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm animate-[fade-in_0.3s_ease_both]"
      role="alertdialog"
      aria-modal="true"
      aria-label={config.skip.warning}
    >
      <div className="w-full max-w-md rounded-3xl bg-(--paper) p-8 text-center shadow-2xl">
        <p className="handwritten mb-6 text-3xl leading-snug text-(--accent-dark)">{config.skip.warning}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button className="btn btn-primary" onClick={onStay} autoFocus>{config.skip.stay}</button>
          <button className="btn" onClick={onLeave}>{config.skip.leave}</button>
        </div>
      </div>
    </div>
  )
}
