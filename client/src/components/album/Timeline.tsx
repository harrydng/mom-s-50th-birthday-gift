import { useState } from 'react'
import { config } from '../../data/config'
import { photos } from '../../data/photos'
import { stages } from '../../data/stages'
import type { Photo } from '../../types'
import { PhotoImage } from './PhotoImage'

interface Props {
  currentIndex: number
  onSelect: (index: number) => void
}

export function Timeline({ currentIndex, onSelect }: Props) {
  // Every life stage starts expanded; tap its heading to fold it away.
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set())
  const toggle = (id: string) =>
    setCollapsed((prev) => {
      const next = new Set(prev)
      if (!next.delete(id)) next.add(id)
      return next
    })

  const renderThumb = ({ p, i }: { p: Photo; i: number }) => (
    <button
      key={p.id}
      onClick={() => onSelect(i)}
      aria-label={`${p.year} (${i + 1} / ${photos.length})`}
      className={`h-fit shrink-0 cursor-pointer rounded-sm bg-white p-2 pb-1 shadow-xl transition hover:-translate-y-1 hover:-rotate-2 ${
        i === currentIndex ? 'ring-4 ring-(--accent)' : ''
      }`}
    >
      <PhotoImage src={p.src} alt={p.year} className="block size-32 object-cover md:size-44" fallbackClassName="size-32 md:size-44" />
      <span className="handwritten block text-center text-xl text-(--accent-dark)">{p.year}</span>
    </button>
  )

  return (
    <section className="flex w-full flex-1 flex-col gap-1 pb-10 pt-36 md:pb-40 md:pt-48">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center pt-2 md:pt-6">
        <h2 className="handwritten col-start-2 mt-2 text-center text-5xl text-(--accent-dark) sm:text-7xl md:translate-y-5 md:text-8xl">
          {config.album.timelineTitle}
        </h2>
      </div>

      <div className="flex flex-1 items-center gap-8 overflow-x-auto pb-6 pl-6 pr-6 pt-4 md:gap-12 md:pl-20 md:pr-8">
        {stages.map((stage) => {
          const items = photos.map((p, i) => ({ p, i })).filter(({ p }) => p.stageId === stage.id)
          if (items.length === 0) return null
          const open = !collapsed.has(stage.id)
          return (
            <div className="shrink-0" key={stage.id}>
              <h3 className="mb-3 border-b-2 border-dashed border-(--ink-soft)/40 pb-1">
                <button
                  className="handwritten flex cursor-pointer items-center gap-3 whitespace-nowrap text-2xl text-(--ink) md:text-3xl [text-shadow:0_0_10px_rgba(251,243,228,0.9)]"
                  onClick={() => toggle(stage.id)}
                  aria-expanded={open}
                >
                  <span className={`text-xl transition-transform duration-300 ${open ? 'rotate-90' : ''}`} aria-hidden>▶</span>
                  {stage.label}
                  <span className="text-xl text-(--ink-soft)">({items.length})</span>
                </button>
              </h3>
              {/* The stage's first photo always stays as its cover; the rest fold away. */}
              <div className="flex">
                {renderThumb(items[0])}
                <div
                  className={`grid transition-[grid-template-columns] duration-500 ease-in-out ${
                    open ? 'grid-cols-[1fr]' : 'grid-cols-[0fr]'
                  }`}
                >
                  <div className="-m-2 min-w-0 overflow-hidden p-2">
                    <div className="flex gap-5 pl-5">{items.slice(1).map(renderThumb)}</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
