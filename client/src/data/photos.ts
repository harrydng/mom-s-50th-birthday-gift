import type { Photo } from '../types'

// Oldest first. Drop files into client/public/media/photos/ and add a row.
// Missing images show a paper placeholder, so you can fill these in gradually.
export const photos: Photo[] = [
  { id: 'p01', src: '/media/photos/01.jpg', year: '1976', stageId: 'childhood', message: 'Lời nhắn cho bức ảnh đầu tiên của mẹ.' },
  { id: 'p02', src: '/media/photos/02.jpg', year: '1980', stageId: 'childhood', message: 'Lời nhắn cho bức ảnh thứ hai.' },
  { id: 'p03', src: '/media/photos/03.jpg', year: '1988', stageId: 'school', message: 'Lời nhắn cho bức ảnh thứ ba.' },
  { id: 'p04', src: '/media/photos/04.jpg', year: '1994', stageId: 'youth', message: 'Lời nhắn cho bức ảnh thứ tư.' },
  { id: 'p05', src: '/media/photos/05.jpg', year: '2000', stageId: 'family', message: 'Lời nhắn cho bức ảnh thứ năm.' },
]
