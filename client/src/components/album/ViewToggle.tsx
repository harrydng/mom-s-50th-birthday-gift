import { useConfig } from '../../i18n'

interface Props {
  /** skip = guided flow (asks before skipping); album/timeline = free exploration */
  view: ToggleMode
  onToggle: () => void
}

/** One button under the music player: "Bỏ qua" while guided, then album <-> timeline. */
export type ToggleMode = 'skip' | 'album' | 'timeline'

export function ViewToggle({ view, onToggle }: Props) {
  const config = useConfig()
  return (
    <button className="btn btn-small shadow-lg" onClick={onToggle}>
      {view === 'skip' ? config.skip.button : view === 'album' ? config.album.timelineButton : config.album.backToAlbum}
    </button>
  )
}
