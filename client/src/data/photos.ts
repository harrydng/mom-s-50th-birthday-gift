import type { Photo } from '../types'

// Oldest first. Drop files into client/public/media/photos/ and add a row.
// Missing images show a paper placeholder, so you can fill these in gradually.
//
// TEMP TEST DATA: 24 fake photos (6 per life stage) so the timeline's
// horizontal scroll has something to scroll. Replace this whole block with
// your real rows, like:
//   { id: 'p01', src: '/media/photos/01.jpg', year: '1976', stageId: 'childhood', message: '...' },
const fakeStages: { stageId: Photo['stageId']; startYear: number }[] = [
  { stageId: 'childhood', startYear: 1976 },
  { stageId: 'school', startYear: 1984 },
  { stageId: 'youth', startYear: 1992 },
  { stageId: 'family', startYear: 2000 },
]

export const photos: Photo[] = fakeStages.flatMap(({ stageId, startYear }, s) =>
  Array.from({ length: 10 }, (_, i) => {
    const n = s * 6 + i + 1
    return {
      id: `p${String(n).padStart(2, '0')}`,
      src: `/media/photos/${String(n).padStart(2, '0')}.jpg`,
      year: String(startYear + i),
      stageId,
      message: `Lời nhắn thử nghiệm cho bức ảnh số ${n}.`,
    }
  }),
)
