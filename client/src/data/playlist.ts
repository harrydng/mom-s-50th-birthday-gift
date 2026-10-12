import type { Song } from '../types'

// Plays top to bottom, then loops. Drop the mp3s in client/public/media/audio/.
export const playlist: Song[] = [
  { title: 'Tên bài hát 1', artist: 'Ca sĩ', src: '/media/audio/song1.mp3' },
  { title: 'Tên bài hát 2', artist: 'Ca sĩ', src: '/media/audio/song2.mp3' },
]
