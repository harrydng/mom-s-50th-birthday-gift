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

// How long a screen fades out (keep in step with fade-out_0.5s on <main>).
const FADE_MS = 500
// The letter popup fades out a little slower (keep in step with LetterModal).
const LETTER_FADE_MS = 600

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
  // True while the current screen is fading out, just before the next one fades in.
  const [fading, setFading] = useState(false)
  const music = useMusic(playlist, config.music.volume)
  // A clip is playing: the music pauses and auto mode waits for it to finish.
  const [videoPlaying, setVideoPlaying] = useState(false)
  const onVideoPlayingChange = (playing: boolean) => {
    setVideoPlaying(playing)
    music.setSuspended(playing)
  }

  const envelopeOpened = view !== 'envelope'

  const openAlbum = () => {
    setLetterOpen(false)
    setIntroDone(true)
  }

  const changeIndex = (i: number) => {
    setAlbumIndex(i)
    if (i >= photos.length) setFree(true)
  }

  // Fade the current screen out, then swap in the next one (which fades in).
  const transition = (apply: () => void, ms = FADE_MS) => {
    setFading(true)
    window.setTimeout(() => {
      apply()
      setFading(false)
    }, ms)
  }

  const openVideo = () =>
    transition(() => {
      changeIndex(photos.length)
      setView('album')
    })

  const skip = () => {
    setSkipAsked(false)
    transition(() => {
      setLetterOpen(false)
      setIntroDone(true)
      setFree(true)
      setView('timeline')
    }, LETTER_FADE_MS)
  }

  return (
    <div className="app">
      <TopNav
        music={music}
        onOpenLetter={envelopeOpened ? () => setLetterOpen(true) : undefined}
        album={view === 'album' && introDone ? { index: albumIndex, onChange: changeIndex, holdAuto: videoPlaying } : undefined}
        viewToggle={
          !envelopeOpened
            ? undefined
            : free
              ? { view, onToggle: () => transition(() => setView(view === 'album' ? 'timeline' : 'album')) }
              : { view: 'skip', onToggle: () => setSkipAsked(true) } // asks first, see SkipDialog
        }
        onOpenVideo={view === 'timeline' ? openVideo : undefined}
      />

      <main className={fading ? 'animate-[fade-out_0.5s_ease_both]' : ''}>
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
            onVideoPlayingChange={onVideoPlayingChange}
          />
        )}
        {view === 'timeline' && (
          <Timeline
            currentIndex={albumIndex}
            onOpenVideo={openVideo}
            onSelect={(i) =>
              transition(() => {
                setAlbumIndex(i)
                setView('album')
              })
            }
          />
        )}
      </main>

      {skipAsked && <SkipDialog onStay={() => setSkipAsked(false)} onLeave={skip} />}

      {letterOpen && (
        <LetterModal
          finishLabel={config.letters.openAlbum}
          onFinish={openAlbum}
          onClose={introDone ? () => setLetterOpen(false) : undefined}
          fadeOut={fading}
        />
      )}
    </div>
  )
}

export default App
