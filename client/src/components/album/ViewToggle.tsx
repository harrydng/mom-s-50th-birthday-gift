import { config } from '../../data/config'

interface Props {
  view: 'album' | 'timeline'
  onToggle: () => void
}

/** One button that flips between the album and the timeline. */
export function ViewToggle({ view, onToggle }: Props) {
  return (
    <button className="btn btn-small shadow-lg" onClick={onToggle}>
      {view === 'album' ? config.album.timelineButton : config.album.backToAlbum}
    </button>
  )
}
