import { config } from '../data/config'
import { photos } from '../data/photos'
import { stages } from '../data/stages'
import { PhotoImage } from './PhotoImage'

interface Props {
  currentIndex: number
  onSelect: (index: number) => void
}

export function Timeline({ currentIndex, onSelect }: Props) {
  return (
    <section className="flex w-full flex-1 flex-col gap-1 pb-40 pt-48">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center pt-6">
        <h2 className="handwritten col-start-2 mt-2  translate-y-5 text-center text-7xl text-(--accent-dark) md:text-8xl">
          {config.album.timelineTitle}
        </h2>
      </div>

      <div className="flex flex-1 items-center gap-12 overflow-x-auto pb-6 pl-8 pr-8 pt-4 md:pl-20">
        {stages.map((stage) => {
          const items = photos.map((p, i) => ({ p, i })).filter(({ p }) => p.stageId === stage.id)
          if (items.length === 0) return null
          return (
            <div className="shrink-0" key={stage.id}>
              <h3 className="handwritten mb-3 border-b-2 border-dashed border-(--ink-soft)/40 pb-1 text-3xl text-(--ink) [text-shadow:0_0_10px_rgba(251,243,228,0.9)]">
                {stage.label}
              </h3>
              <div className="flex gap-5">
                {items.map(({ p, i }) => (
                  <button
                    key={p.id}
                    onClick={() => onSelect(i)}
                    aria-label={`${p.year} (${i + 1} / ${photos.length})`}
                    className={`cursor-pointer rounded-sm bg-white p-2 pb-1 shadow-xl transition hover:-translate-y-1 hover:-rotate-2 ${
                      i === currentIndex ? 'ring-4 ring-(--accent)' : ''
                    }`}
                  >
                    <PhotoImage src={p.src} alt={p.year} className="block size-44 object-cover" fallbackClassName="size-44" />
                    <span className="handwritten block text-center text-xl text-(--accent-dark)">{p.year}</span>
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
