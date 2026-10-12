import { config } from '../data/config'
import type { MusicControls } from '../hooks/useMusic'
import { AlbumNav } from './AlbumNav'
import { MusicPlayer } from './MusicPlayer'
import { ViewToggle } from './ViewToggle'

interface Props {
  music: MusicControls
  onOpenLetter: () => void
  /** Album position + setter; shown above the bottom buttons while browsing the album. */
  album?: { index: number; onChange: (index: number) => void }
  /** Album <-> timeline switch, shown under the music player once unlocked. */
  viewToggle?: { view: 'album' | 'timeline'; onToggle: () => void }
  /** Shown beside the music player while the guided experience is running. */
  onSkip?: () => void
  /** Shown beside the envelope (timeline view only) to jump to the video. */
  onOpenVideo?: () => void
}

export function TopNav({ music, onOpenLetter, album, viewToggle, onSkip, onOpenVideo }: Props) {
  return (
    <>
      {/* Both nav pieces are fixed overlays: they take no space in the page layout. */}
      <nav className="fixed inset-x-0 top-0 z-30 flex flex-col items-center gap-3 px-4 py-4 animate-[drop-in_0.6s_ease_both]">
        <div className="flex items-center justify-center gap-3">
          <MusicPlayer music={music} />
          {onSkip && (
            <button className="btn btn-small whitespace-nowrap shadow-lg" onClick={onSkip}>
              {config.skip.button}
            </button>
          )}
        </div>
        {viewToggle && <ViewToggle view={viewToggle.view} onToggle={viewToggle.onToggle} />}
      </nav>

      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-10 flex flex-col items-center gap-2">
        {album && (
          <div className="pointer-events-auto">
            <AlbumNav index={album.index} onChange={album.onChange} />
          </div>
        )}
        <div className="flex items-center justify-center gap-4">
          <button
            className="pointer-events-auto cursor-pointer border-0 bg-transparent p-0 leading-none transition hover:scale-110"
            onClick={onOpenLetter}
            aria-label={config.letters.navLabel}
            title={config.letters.navLabel}
          >
            <img src="/envelop.png" alt="" className="size-30 object-contain" />
          </button>
          {onOpenVideo && (
            <button
              className="pointer-events-auto cursor-pointer border-0 bg-transparent p-0 leading-none transition hover:scale-110"
              onClick={onOpenVideo}
              aria-label={config.video.navLabel}
              title={config.video.navLabel}
            >
              <img src="/video.png" alt="" className="size-30 object-contain" />
            </button>
          )}
        </div>
      </div>
    </>
  )
}
