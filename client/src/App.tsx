import { useState } from 'react'
import { Album } from './components/album/Album'
import { EnvelopeScreen } from './components/envelope/EnvelopeScreen'
import { LetterModal } from './components/letter/LetterModal'
import { SkipDialog } from './components/nav/SkipDialog'
import { Timeline } from './components/album/Timeline'
import { TopNav } from './components/nav/TopNav'
import { config } from './data/config'
import { photos } from './data/photos'
import { playlist } from './data/playlist'
import { useMusic } from './hooks/useMusic'
import type { View } from './types'

function App() {
  const [view, setView] = useState<View>('envelope')
  const [letterOpen, setLetterOpen] = useState(false)
  // Album stays hidden until she has finished the letters the first time.
  const [introDone, setIntroDone] = useState(false)
  const [albumIndex, setAlbumIndex] = useState(0)
  // Guided = letters -> photos one by one -> video. Reaching the video or
  // skipping unlocks free exploration (timeline, jump to video).
  const [free, setFree] = useState(false)
  const [skipAsked, setSkipAsked] = useState(false)
  const music = useMusic(playlist, config.music.volume)

  const envelopeOpened = view !== 'envelope'

  const openAlbum = () => {
    setLetterOpen(false)
    setIntroDone(true)
  }

  const changeIndex = (i: number) => {
    setAlbumIndex(i)
    if (i >= photos.length) setFree(true)
  }

  const openVideo = () => {
    changeIndex(photos.length)
    setView('album')
  }

  const skip = () => {
    setSkipAsked(false)
    setLetterOpen(false)
    setIntroDone(true)
    setFree(true)
    setView('timeline')
  }

  return (
    <div className="app">
      <TopNav
        music={music}
        onOpenLetter={envelopeOpened ? () => setLetterOpen(true) : undefined}
        album={view === 'album' && introDone ? { index: albumIndex, onChange: changeIndex } : undefined}
        viewToggle={
          free && introDone && envelopeOpened
            ? { view, onToggle: () => setView(view === 'album' ? 'timeline' : 'album') }
            : undefined
        }
        onSkip={envelopeOpened && !free ? () => setSkipAsked(true) : undefined}
        onOpenVideo={view === 'timeline' ? openVideo : undefined}
      />

      <main>
        {view === 'envelope' && (
          <EnvelopeScreen
            onOpenClick={music.start}
            onSkip={() => {
              setIntroDone(true)
              setView('album')
            }}
            onOpened={() => {
              // The letters are the first thing she reads; the album sits behind them.
              setView('album')
              setLetterOpen(true)
            }}
          />
        )}
        {view === 'album' && introDone && (
          <Album
            index={albumIndex}
            onIndexChange={changeIndex}
            onVideoPlayingChange={music.setSuspended}
          />
        )}
        {view === 'timeline' && (
          <Timeline
            currentIndex={albumIndex}
            onOpenVideo={openVideo}
            onSelect={(i) => {
              setAlbumIndex(i)
              setView('album')
            }}
          />
        )}
      </main>

      {skipAsked && <SkipDialog onStay={() => setSkipAsked(false)} onLeave={skip} />}

      {letterOpen && (
        <LetterModal
          finishLabel={introDone ? config.letters.close : config.letters.openAlbum}
          onFinish={openAlbum}
          onClose={introDone ? () => setLetterOpen(false) : undefined}
        />
      )}
    </div>
  )
}

export default App
