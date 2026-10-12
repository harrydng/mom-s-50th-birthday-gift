import { config } from '../data/config'
import { photos } from '../data/photos'

interface Props {
  index: number
  onChange: (index: number) => void
}

const arrow =
  'flex size-10 cursor-pointer items-center justify-center rounded-full text-xl text-(--accent-dark) transition hover:bg-(--accent)/10 disabled:cursor-default disabled:opacity-40'

/** Previous / next memory with a "3 / 24" counter; the last slide is the video. */
export function AlbumNav({ index, onChange }: Props) {
  const isFinale = index >= photos.length
  return (
    <div className="flex items-center gap-1 rounded-full bg-(--paper)/90 px-2 py-1 shadow-lg backdrop-blur">
      <button className={arrow} onClick={() => onChange(index - 1)} disabled={index === 0} aria-label={config.album.prev}>←</button>
      <span className="counter min-w-14 text-center text-sm">{isFinale ? <img src="/video.png" alt="" className="mx-auto size-6 object-contain" /> : `${index + 1} / ${photos.length}`}</span>
      <button className={arrow} onClick={() => onChange(index + 1)} disabled={isFinale} aria-label={config.album.next}>→</button>
    </div>
  )
}
