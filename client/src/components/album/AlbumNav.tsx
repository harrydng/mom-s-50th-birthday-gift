import { Fragment, useEffect, useState } from 'react'
import { config } from '../../data/config'
import { photos } from '../../data/photos'
import { stages } from '../../data/stages'

interface Props {
  index: number
  onChange: (index: number) => void
  /** true while a clip is playing: auto mode waits until it stops. */
  holdAuto?: boolean
}

const arrow =
  'flex size-10 cursor-pointer items-center justify-center rounded-full text-xl text-(--accent-dark) transition hover:bg-(--accent)/10 disabled:cursor-default disabled:opacity-40'

/**
 * Two rows: life-stage titles on top, joined by "-----" (jump to the first
 * photo of a stage; the current one and the hovered one glow red), and
 * previous / next with a "3 / 24" counter below. The last slide is the video.
 */
export function AlbumNav({ index, onChange, holdAuto }: Props) {
  const isFinale = index >= photos.length
  const currentStage = photos[index]?.stageId
  const [autoOn, setAutoOn] = useState(false)
  const auto = autoOn && !isFinale

  // Auto mode: advance every few seconds. Keyed on `index`, so a manual
  // move restarts the countdown; it switches itself off at the video and
  // waits while a clip plays (the countdown restarts when it stops).
  useEffect(() => {
    if (!auto || holdAuto) return
    const t = setTimeout(() => {
      if (index + 1 >= photos.length) setAutoOn(false)
      onChange(index + 1)
    }, config.album.autoIntervalMs)
    return () => clearTimeout(t)
  }, [auto, holdAuto, index, onChange])

  // One entry per life stage, plus the closing video as the last section.
  const sections = [
    ...stages
      .filter((stage) => photos.some((p) => p.stageId === stage.id))
      .map((stage) => ({
        id: stage.id,
        label: stage.label,
        target: photos.findIndex((p) => p.stageId === stage.id),
        active: stage.id === currentStage,
      })),
    { id: 'final', label: config.album.finalSection, target: photos.length, active: isFinale },
  ]

  return (
    <div className="flex flex-col items-center gap-2 md:gap-2">
      <div className="flex max-w-[92vw] items-center gap-2 overflow-x-auto px-3 py-1 md:gap-3 md:px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sections.map(({ id, label, target, active }, n) => {
            return (
              <Fragment key={id}>
                {n > 0 && (
                  <span className="shrink-0 select-none text-sm text-(--ink-soft)/60 md:text-base [text-shadow:0_0_10px_rgba(251,243,228,0.9)]" aria-hidden>---</span>
                )}
                <button
                  onClick={() => onChange(target)}
                  aria-current={active}
                  className={`handwritten shrink-0 cursor-pointer whitespace-nowrap py-1 text-lg transition-all md:text-xl lg:text-2xl duration-300 ${
                    active
                      ? 'text-(--accent-dark) [text-shadow:0_0_6px_rgba(226,85,74,0.3),0_0_18px_rgba(192,85,74,0.6)]'
                      : 'text-(--ink-soft) [text-shadow:0_0_10px_rgba(251,243,228,0.2)]'
                  } hover:text-(--accent-dark) hover:[text-shadow:0_0_6px_rgba(192,85,74,0.9),0_0_18px_rgba(192,85,74,0.6)]`}
                >
                  {label}
                </button>
              </Fragment>
            )
          })}
      </div>

      <div className="flex items-center gap-1 rounded-full bg-(--paper)/90 px-2 py-1 shadow-lg backdrop-blur">
        <button className={arrow} onClick={() => { setAutoOn(false); onChange(index - 1) }} disabled={index === 0} aria-label={config.album.prev}>←</button>
        <span className="counter min-w-14 text-center text-sm">
          {isFinale ? <img src="/video.png" alt="" className="mx-auto size-6 object-contain" /> : `${index + 1} / ${photos.length}`}
        </span>
        <button className={arrow} onClick={() => { setAutoOn(false); onChange(index + 1) }} disabled={isFinale} aria-label={config.album.next}>→</button>
        <button
          className={`ml-1 flex h-10 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3 text-sm text-(--accent-dark) transition hover:bg-(--accent)/10 disabled:cursor-default disabled:opacity-40 ${auto ? 'bg-(--accent)/15' : ''}`}
          onClick={() => setAutoOn(!auto)}
          disabled={isFinale}
          aria-pressed={auto}
        >
          <span aria-hidden className="text-xs">{auto ? '❚❚' : '▶'}</span>
          {auto ? config.album.autoPause : config.album.autoPlay}
        </button>
      </div>
    </div>
  )
}
