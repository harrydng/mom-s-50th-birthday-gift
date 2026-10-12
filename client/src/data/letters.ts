import type { Letter } from '../types'

// Page 1 = your letter, page 2 = dad's. Add or reorder freely.
export const letters: Letter[] = [
  {
    id: 'from-me',
    title: 'Gửi mẹ yêu',
    paragraphs: [
      'Mẹ ơi, chúc mừng sinh nhật 50 tuổi của mẹ!',
      '(Viết lời nhắn của con ở đây. Mỗi phần tử là một đoạn văn.)',
      'Con yêu mẹ rất nhiều.',
    ],
    signature: 'Con của mẹ',
  },
  {
    id: 'from-dad',
    title: 'Một lời nhắn từ bố',
    paragraphs: [
      'Em yêu, chúc mừng sinh nhật em.',
      '(Viết lời nhắn của bố ở đây.)',
    ],
    signature: 'Chồng của em',
  },
]
