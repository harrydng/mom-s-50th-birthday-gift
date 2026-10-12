import { useCallback, useEffect, useRef, useState } from 'react'
import type { Song } from '../types'

/**
 * Playlist player. `wanted` is the user's play/pause intent; `suspended` is a
 * temporary pause (used while the birthday video plays). Browsers require a
 * user gesture before audio, so `start()` must be called from a click handler.
 */
export function useMusic(playlist: Song[], volume: number) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const loadedSrc = useRef<string | null>(null)
  const [trackIndex, setTrackIndex] = useState(0)
  const [wanted, setWanted] = useState(false)
  const [suspended, setSuspended] = useState(false)
  const [muted, setMuted] = useState(false)
  const [time, setTime] = useState({ current: 0, duration: 0 })

  const count = playlist.length
  const track: Song | undefined = playlist[trackIndex]

  const step = useCallback((delta: number) => {
    setTrackIndex((i) => (count === 0 ? 0 : (i + delta + count) % count))
  }, [count])

  useEffect(() => {
    const audio = new Audio()
    audioRef.current = audio
    const onTime = () => setTime({ current: audio.currentTime, duration: audio.duration || 0 })
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onTime)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onTime)
      audio.pause()
      audioRef.current = null
      loadedSrc.current = null
    }
  }, [])

  // Auto-advance; a one-song playlist just repeats.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.loop = count === 1
    const onEnded = () => step(1)
    audio.addEventListener('ended', onEnded)
    return () => audio.removeEventListener('ended', onEnded)
  }, [count, step])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = volume
      audio.muted = muted
    }
  }, [volume, muted])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !track) return
    if (loadedSrc.current !== track.src) {
      audio.src = track.src
      loadedSrc.current = track.src
      setTime({ current: 0, duration: 0 })
    }
    if (wanted && !suspended) audio.play().catch(() => {})
    else audio.pause()
  }, [track, wanted, suspended])

  const seek = useCallback((seconds: number) => {
    if (audioRef.current) audioRef.current.currentTime = seconds
  }, [])

  return {
    track,
    playing: wanted && !suspended,
    muted,
    time,
    start: useCallback(() => setWanted(true), []),
    togglePlay: useCallback(() => setWanted((w) => !w), []),
    toggleMute: useCallback(() => setMuted((m) => !m), []),
    next: useCallback(() => step(1), [step]),
    prev: useCallback(() => step(-1), [step]),
    seek,
    setSuspended,
  }
}

export type MusicControls = ReturnType<typeof useMusic>
