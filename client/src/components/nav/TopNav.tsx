import { config } from '../../data/config'
import type { MusicControls } from '../../hooks/useMusic'
import { AlbumNav } from '../album/AlbumNav'
import { MobileMenu, type MenuItem } from './MobileMenu'
import { MusicPlayer } from './MusicPlayer'
import { ViewToggle, type ToggleMode } from '../album/ViewToggle'

interface Props {
  music: MusicControls
  /** Omit on the envelope screen: there is no letter to reopen yet. */
  onOpenLetter?: () => void
  /** Album position + setter; shown above the bottom buttons while browsing the album. */
  album?: { index: number; onChange: (index: number) => void; holdAuto?: boolean }
  /** The single button under the music player (skip while guided, then album <-> timeline). */
  viewToggle?: { view: ToggleMode; onToggle: () => void }
  /** Shown beside the envelope (timeline view only) to jump to the video. */
  onOpenVideo?: () => void
}

export function TopNav({ music, onOpenLetter, album, viewToggle, onOpenVideo }: Props) {
  // On phones these two live in a top-left dropdown instead of the bottom row.
  const menuItems: MenuItem[] = [
    ...(onOpenLetter ? [{ label: config.letters.navLabel, icon: '/envelop.png', onClick: onOpenLetter }] : []),
    ...(onOpenVideo ? [{ label: config.video.navLabel, icon: '/video.png', onClick: onOpenVideo }] : []),
  ]

  return (
    <>
      {/* Both nav pieces are fixed overlays: they take no space in the page layout. */}
      <nav className="fixed inset-x-0 top-0 z-30 flex flex-col items-center gap-2 py-3 pl-16 pr-3 md:gap-3 md:px-4 md:py-4 animate-[drop-in_0.6s_ease_both]">
        <MobileMenu items={menuItems} />
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          <MusicPlayer music={music} />
        </div>
        {viewToggle && <ViewToggle view={viewToggle.view} onToggle={viewToggle.onToggle} />}
      </nav>

      <div className="pointer-events-none fixed inset-x-0 bottom-2 z-10 flex flex-col items-center gap-1 md:bottom-4 md:gap-2">
        {album && (
          <div className="pointer-events-auto">
            <AlbumNav index={album.index} onChange={album.onChange} holdAuto={album.holdAuto} />
          </div>
        )}
        <div className="hidden items-center justify-center gap-4 md:flex">
          {onOpenLetter && (
            <button
              className="pointer-events-auto cursor-pointer border-0 bg-transparent p-0 leading-none transition hover:scale-110"
              onClick={onOpenLetter}
              aria-label={config.letters.navLabel}
              title={config.letters.navLabel}
            >
              <img src="/envelop.png" alt="" className="size-16 object-contain md:size-30" />
            </button>
          )}
          {onOpenVideo && (
            <button
              className="pointer-events-auto cursor-pointer border-0 bg-transparent p-0 leading-none transition hover:scale-110"
              onClick={onOpenVideo}
              aria-label={config.video.navLabel}
              title={config.video.navLabel}
            >
              <img src="/video.png" alt="" className="size-16 object-contain md:size-30" />
            </button>
          )}
        </div>
      </div>
    </>
  )
}
