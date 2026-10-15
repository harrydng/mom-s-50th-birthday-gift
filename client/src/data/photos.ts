import type { Photo } from '../types'

// One block per life stage, in the same order as stages.ts. The first argument
// is the stage id AND the folder in client/public/media/photos/, so a row only
// needs the file name inside that folder:
//
//   ...stagePhotos('01_tuoi_tho', [
//     { file: '01.jpg', year: '1976', message: '...', title: 'optional heading' },
//   ]),
//
// Oldest first inside each stage. Missing images show a paper placeholder.
type Row = { file: string; year: string; message: string; title?: string }

const stagePhotos = (stageId: string, rows: Row[]): Photo[] =>
  rows.map(({ file, ...rest }) => ({
    id: `${stageId}/${file}`,
    src: `/media/photos/${stageId}/${file}`,
    stageId,
    ...rest,
  }))

const TODO = 'To do'

// year is left blank for now: it is hidden everywhere until you fill it in.
export const photos: Photo[] = [
  ...stagePhotos('01_tuoi_tho', [
    { file: 'p0_hoibe.jpg', year: '', title: TODO, message: TODO },
    { file: 'p1_hoibe.jpeg', year: '', title: TODO, message: TODO },
    { file: 'p2_hoibe.jpeg', year: '', title: TODO, message: TODO },
  ]),
  ...stagePhotos('02_thanh_xuan', [
    { file: 'p0_thanhxuan.jpg', year: '', title: TODO, message: TODO },
    { file: 'p1_thanhxuan.jpg', year: '', title: TODO, message: TODO },
  ]),
  ...stagePhotos('03_marriage', [
    { file: 'p0_cuoi.jpg', year: '', title: TODO, message: TODO },
    { file: 'p1_cuoi.jpg', year: '', title: TODO, message: TODO },
    { file: 'p2_cuoi.jpg', year: '', title: TODO, message: TODO },
    { file: 'p4_cuoi.jpg', year: '', title: TODO, message: TODO },
  ]),
  // 04_adventures: no photos yet
  ...stagePhotos('05_her_kids', [
    { file: 'p0_caccon.jpg', year: '', title: TODO, message: TODO },
    { file: 'p1_caccon.jpg', year: '', title: TODO, message: TODO },
  ]),
  // 06_love_that_stays, 07_little_ones, 08_you_now: no photos yet
]
