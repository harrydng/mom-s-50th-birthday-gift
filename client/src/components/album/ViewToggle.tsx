import { config } from '../../data/config'

interface Props {
  /** skip = guided flow (asks before skipping); album/timeline = free exploration */
  view: ToggleMode
  onToggle: () => void
}

/** One button under the music player: "Bỏ qua" while guided, then album <-> timeline. */
export type ToggleMode = 'skip' | 'album' | 'timeline'

export function ViewToggle({ view, onToggle }: Props) {
  return (
    <button className="btn btn-small shadow-lg" onClick={onToggle}>
      {view === 'skip' ? config.skip.button : view === 'album' ? config.album.timelineButton : config.album.backToAlbum}
    </button>
  )
}
