import { Fragment } from 'react'
import { config } from '../../data/config'
import { photos } from '../../data/photos'
import { stages } from '../../data/stages'

interface Props {
  index: number
  onChange: (index: number) => void
}

const arrow =
  'flex size-10 cursor-pointer items-center justify-center rounded-full text-xl text-(--accent-dark) transition hover:bg-(--accent)/10 disabled:cursor-default disabled:opacity-40'

/**
 * Two rows: life-stage titles on top, joined by "-----" (jump to the first
 * photo of a stage; the current one and the hovered one glow red), and
 * previous / next with a "3 / 24" counter below. The last slide is the video.
 */
export function AlbumNav({ index, onChange }: Props) {
  const isFinale = index >= photos.length
  const currentStage = photos[index]?.stageId

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex max-w-[92vw] items-center gap-3 overflow-x-auto px-5 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {stages
          .filter((stage) => photos.some((p) => p.stageId === stage.id))
          .map((stage, n) => {
            const first = photos.findIndex((p) => p.stageId === stage.id)
            const active = stage.id === currentStage
            return (
              <Fragment key={stage.id}>
                {n > 0 && (
                  <span className="shrink-0 select-none text-(--ink-soft)/60 [text-shadow:0_0_10px_rgba(251,243,228,0.9)]" aria-hidden>-----</span>
                )}
                <button
                  onClick={() => onChange(first)}
                  aria-current={active}
                  className={`handwritten shrink-0 cursor-pointer whitespace-nowrap py-1 text-2xl transition-all duration-300 ${
                    active
                      ? 'text-(--accent-dark) [text-shadow:0_0_6px_rgba(226,85,74,0.3),0_0_18px_rgba(192,85,74,0.6)]'
                      : 'text-(--ink-soft) [text-shadow:0_0_10px_rgba(251,243,228,0.2)]'
                  } hover:text-(--accent-dark) hover:[text-shadow:0_0_6px_rgba(192,85,74,0.9),0_0_18px_rgba(192,85,74,0.6)]`}
                >
                  {stage.label}
                </button>
              </Fragment>
            )
          })}
      </div>

      <div className="flex items-center gap-1 rounded-full bg-(--paper)/90 px-2 py-1 shadow-lg backdrop-blur">
        <button className={arrow} onClick={() => onChange(index - 1)} disabled={index === 0} aria-label={config.album.prev}>←</button>
        <span className="counter min-w-14 text-center text-sm">
          {isFinale ? <img src="/video.png" alt="" className="mx-auto size-6 object-contain" /> : `${index + 1} / ${photos.length}`}
        </span>
        <button className={arrow} onClick={() => onChange(index + 1)} disabled={isFinale} aria-label={config.album.next}>→</button>
      </div>
    </div>
  )
}
