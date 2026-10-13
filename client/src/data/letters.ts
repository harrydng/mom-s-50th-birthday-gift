import type { Letter } from '../types'

// One entry per letter; each gets a button (tabLabel) under the paper.
export const letters: Letter[] = [
  {
    id: 'from-me',
    tabLabel: 'Con trai',
    title: 'Gửi mẹ',
    paragraphs: [
      'Chúc mừng sinh nhật 50 tuổi của mẹ!',
      'lời nhắn',
      'Con yêu mẹ rất nhiều.',
    ],
    signature: 'Con của mẹ, Harry',
  },
  {
    id: 'from-dad',
    tabLabel: 'Chồng',
    title: 'Một lời nhắn từ bố',
    paragraphs: [
      'Em yêu, chúc mừng sinh nhật em.',
      '(Viết lời nhắn của bố ở đây.)',
    ],
    signature: 'Chồng của em',
  },
]
