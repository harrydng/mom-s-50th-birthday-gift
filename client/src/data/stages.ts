import type { LifeStage } from '../types'

// Timeline groups appear in this order. Each `id` is also the folder name in
// client/public/media/photos/, so photos for a stage go in that folder.
export const stages: LifeStage[] = [
  { id: '01_tuoi_tho', label: 'Tuổi thơ' },
  { id: '02_thanh_xuan', label: 'Thanh xuân' },
  { id: '03_marriage', label: 'Ngày cưới' },
  { id: '04_family', label: 'Gia đình' },
  { id: '05_dung', label: 'Dũng' },
  { id: '06_nghia', label: 'Nghĩa' },
  // { id: '07_adventures', label: 'Những chuyến phiêu lưu' },
  // { id: '08_love_that_stays', label: 'Yêu thương còn mãi' },
  { id: '09_little_ones', label: 'Các em' },
  { id: '010_you_now', label: 'Tương lai' },
]
