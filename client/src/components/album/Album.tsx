import { useEffect, useLayoutEffect, useRef } from 'react'
import { photos } from '../../data/photos'
import { PhotoImage } from './PhotoImage'
import { VideoFinale } from './VideoFinale'

interface Props {
  index: number
  onIndexChange: (index: number) => void
  onVideoPlayingChange: (playing: boolean) => void
}

export function Album({ index, onIndexChange, onVideoPlayingChange }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)

  // Jump straight to the remembered slide when the album (re)appears.
  useLayoutEffect(() => {
    const el = trackRef.current
    if (el) el.scrollLeft = index * el.clientWidth
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // The prev/next buttons live in the top nav and just change `index`;
  // glide to it unless a swipe already got us there.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    if (Math.round(el.scrollLeft / el.clientWidth) !== index) {
      el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' })
    }
  }, [index])

  const onScroll = () => {
    const el = trackRef.current
    if (!el) return
    const i = Math.round(el.scrollLeft / el.clientWidth)
    if (i !== index) onIndexChange(i)
  }

  return (
    <section className="flex w-full flex-1 flex-col items-center gap-4 pb-56 pt-48">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex w-full max-w-6xl flex-1 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo) => (
          <article
            key={photo.id}
            className="flex w-full shrink-0 snap-center flex-col items-center justify-center gap-6 px-4 md:flex-row md:gap-12 md:px-10"
          >
            <figure className="m-0 -rotate-1 rounded-sm bg-white p-4 pb-3 shadow-2xl">
              <PhotoImage
                src={photo.src}
                alt={photo.year}
                className="block max-h-[55vh] max-w-full rounded-sm md:max-h-[65vh] md:max-w-[40vw]"
              />
              <figcaption className="handwritten mt-2 text-center text-3xl text-(--accent-dark)">{photo.year}</figcaption>
            </figure>
            <p className="max-w-md text-xl leading-relaxed text-(--ink) [text-shadow:0_0_12px_rgba(251,243,228,0.95)] md:text-2xl md:leading-loose">
              {photo.message}
            </p>
          </article>
        ))}
        <article className="flex w-full shrink-0 snap-center items-center justify-center px-4">
          <VideoFinale onPlayingChange={onVideoPlayingChange} />
        </article>
      </div>
    </section>
  )
}
