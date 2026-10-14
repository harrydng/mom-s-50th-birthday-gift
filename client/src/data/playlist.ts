import type { Song } from '../types'

// Files are named song1, song2, ... in client/public/media/audio/ (mp3 or m4a).
// Add one line per file, in play order; the playlist loops at the end.
const song = (n: number, title: string, artist: string, ext: 'mp3' | 'm4a' = 'mp3'): Song => ({
  title,
  artist,
  src: `/media/audio/song${n}.${ext}`,
})

export const playlist: Song[] = [
  song(1, 'Ước Mơ Của Mẹ', 'Văn Mai Hương, Hứa Kim Tuyền'),
  song(2, 'Cảm Ơn Và Xin Lỗi', 'Chillies', 'm4a'),
  song(3, 'Nếu Một Mai Tôi Bay Lên Trời', 'Trúc Nhân', 'm4a'),
]
