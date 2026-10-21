import { useState } from 'react'
import { config } from '../../data/config'
import { PasswordForm } from '../letter/PasswordForm'

interface Props {
  /** true while the video is playing, so the parent can pause the music */
  onPlayingChange: (playing: boolean) => void
  /** False = ask for the password (the same one as the letter) first. */
  unlocked: boolean
  onUnlock: () => void
}

export function VideoFinale({ onPlayingChange, unlocked, onUnlock }: Props) {
  const [started, setStarted] = useState(false)

  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center">
      <p className="handwritten text-3xl text-(--accent-dark) sm:text-4xl md:text-5xl">{config.video.intro}</p>
      <div className="w-full rotate-1 rounded-sm bg-white p-3 shadow-xl">
        {!unlocked ? (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 bg-(--paper) px-4">
            <p className="handwritten text-2xl text-(--accent-dark) sm:text-3xl">{config.video.lockTitle}</p>
            <PasswordForm onUnlock={onUnlock} label={config.video.unlock} />
          </div>
        ) : started ? (
          <video
            className="block w-full"
            src={config.video.src}
            poster={config.video.poster}
            controls
            autoPlay
            playsInline
            onPlay={() => onPlayingChange(true)}
            onPause={() => onPlayingChange(false)}
            onEnded={() => onPlayingChange(false)}
          />
        ) : (
          <button
            className="aspect-video w-full cursor-pointer bg-(--paper-edge) text-2xl text-(--accent-dark) transition hover:brightness-95"
            onClick={() => setStarted(true)}
          >
            {config.video.playLabel}
          </button>
        )}
      </div>
    </div>
  )
}
