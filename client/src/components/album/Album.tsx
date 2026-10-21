import { useEffect, useLayoutEffect, useRef } from 'react'
import { photos } from '../../data/photos'
import { stages } from '../../data/stages'
import { useT } from '../../i18n'
import { PhotoMemory } from './PhotoMemory'
import { VideoFinale } from './VideoFinale'

interface Props {
  index: number
  onIndexChange: (index: number) => void
  onVideoPlayingChange: (playing: boolean) => void
  /** Shared with the letter: one password opens both. */
  videoUnlocked: boolean
  onUnlock: () => void
}

export function Album({ index, onIndexChange, onVideoPlayingChange, videoUnlocked, onUnlock }: Props) {
  const t = useT()
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
    // A clip left playing on the slide we just moved away from stops.
    el.querySelectorAll('video').forEach((v) => v.pause())
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
    <section className="flex w-full flex-1 flex-col items-center gap-4 animate-[fade-in_1.2s_ease_both] pb-32 pt-36 md:pb-72 md:pt-48">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex w-full max-w-6xl flex-1 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo) => (
          <article key={photo.id} className="flex w-full shrink-0 snap-center items-center justify-center px-2">
            <PhotoMemory
              src={photo.src}
              year={String(photo.year)}
              message={photo.message}
              title={photo.title && t(photo.title)}
              stage={t(stages.find((stage) => stage.id === photo.stageId)?.label ?? '')}
              onPlayingChange={onVideoPlayingChange}
            />
          </article>
        ))}
        <article className="flex w-full shrink-0 snap-center items-center justify-center px-4">
          <VideoFinale onPlayingChange={onVideoPlayingChange} unlocked={videoUnlocked} onUnlock={onUnlock} />
        </article>
      </div>
    </section>
  )
}
