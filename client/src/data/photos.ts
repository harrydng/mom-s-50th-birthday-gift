import type { Photo } from "../types";

// One block per life stage, in the same order as stages.ts. The first argument
// is the stage id AND the folder in client/public/media/photos/, so a row only
// needs the file name inside that folder:
//
//   ...stagePhotos('01_tuoi_tho', [
//     { file: '01.jpg', year: '1976', message: '...', title: 'optional heading' },
//   ]),
//
// Oldest first inside each stage. Missing images show a paper placeholder.
type Row = { file: string; year?: string; message: string; title?: string };

const stagePhotos = (stageId: string, rows: Row[]): Photo[] =>
  rows.map(({ file, year = "", ...rest }) => ({
    id: `${stageId}/${file}`,
    src: `/media/photos/${stageId}/${file}`,
    stageId,
    year,
    ...rest,
  }));

// year is left blank for now: it is hidden everywhere until you fill it in.
export const photos: Photo[] = [
  ...stagePhotos("01_tuoi_tho", [
    { file: "p0_hoibe.jpg", title: "Ông bà hồi trẻ", message: "" },
    { file: "p1_hoibe.jpeg", title: "Anh trai và em gái hồi bé", message: "" },
    { file: "p2_hoibe.jpeg", title: "Hai chị em", message: "" },
    { file: "p3_hoibe.jpg", title: "Nhe răng cười", message: "" },
    { file: "p7_hoibe.jpg", title: "Ông bà", message: "" },
  ]),
  ...stagePhotos("02_thanh_xuan", [
    { file: "p0.0_thanhxuan.png", title: "Thanh xuân", message: "" },
    { file: "p20_thanhxuan.jpg", title: "", message: "" },
    { file: "p0.1_thanhxuan.jpg", title: "Thời đại học", message: "" },
    { file: "p8_thanhxuan.jpg", title: "", message: "" },
    {
      file: "p17_thanhxuan.jpg",
      title: "23/3/1994 - Trình làng Nữ sinh lớp 12 trường Bưởi",
      message: "",
    },
    { file: "p18_thanhxuan.jpg", title: "", message: "" },
    { file: "p1_thanhxuan.jpg", title: "", message: "" },

    { file: "p2_thanhxuan.jpg", title: "Cưỡi voi ở Thái Lan", message: "" },
    // { file: 'p3_thanhxuan.jpg', title: "", message: "" },
    { file: "p6_thanhxuan.jpg", title: "", message: "" },
    { file: "p4_thanhxuan.jpg", title: "", message: "" },
    { file: "p11_thanhxuan.jpg", title: "", message: "" },

    {
      file: "p15_thanhxuan.jpg",
      title: "FLC Samson Beach & Golf Resort",
      message: "",
    },
    {
      file: "p16_thanhxuan.jpg",
      title: "FLC Samson Beach & Golf Resort",
      message: "",
    },
    // { file: "p12_thanhxuan.jpg", title: "", message: "" },

    { file: "p5_thanhxuan.jpg", title: "", message: "" },

    // { file: "p7_thanhxuan.jpg", title: "", message: "" },
    { file: "p13_thanhxuan.jpg", title: "", message: "" },
    {
      file: "p14_thanhxuan.jpg",
      title: "Nhậu cùng đồng nghiệp ở Falcon",
      message: "",
    },
    { file: "p19_thanhxuan.jpg", title: "", message: "" },
    { file: "p21_thanhxuan.jpg", title: "", message: "" },
    { file: "p22_thanhxuan.jpg", title: "", message: "" },
    { file: "p23_thanhxuan.jpg", title: "", message: "" },
    { file: "p24_thanhxuan.jpg", title: "", message: "" },
    { file: "p25_thanhxuan.jpg", title: "", message: "" },
    {
      file: "p26_thanhxuan.jpg",
      title: "MSB - Ngân hàng TMCP Hàng Hải Việt Nam.",
      message: "",
    },
    {
      file: "p27_thanhxuan.jpg",
      title: "Chiếc xe đầu tiên của mẹ",
      message: "",
    },
    { file: "p28_thanhxuan.jpg", title: "", message: "" },
    { file: "p29_thanhxuan.jpg", title: "", message: "" },
    { file: "p30_thanhxuan.jpg", title: "Quy Nhơn", message: "" },
    // { file: "p31_thanhxuan.jpg", title: "", message: "" },
    { file: "p33_thanhxuan.jpg", title: "", message: "" },
    {
      file: "p34_thanhxuan.jpg",
      title: "Kỷ niệm khoá 32 đại học",
      message: "",
    },
    { file: "p35_thanhxuan.jpg", title: "", message: "" },
    { file: "p36_thanhxuan.jpg", title: "", message: "" },
    { file: "p37_thanhxuan.jpg", title: "", message: "" },
    {
      file: "p38_thanhxuan.jpg",
      title: "Du lich cùng hội bạn thân thời đại học",
      message: "",
    },
    { file: "p39_thanhxuan.jpg", title: "", message: "" },
    {
      file: "p40_thanhxuan.jpg",
      title: "Nhật Bản - lần đầu chơi tuyết",
      message: "",
    },
    {
      file: "p41_thanhxuan.jpg",
      title: "Nhật Bản - ngắm hoa anh đào",
      message: "",
    },
    { file: "p44_thanhxuan.jpg", title: "Mẹ hát karaoke", message: "" },
    {
      file: "p45_thanhxuan.jpg",
      title: "Họp mặt khoá đại học tài chính lớp D32",
      message: "",
    },
    { file: "p46_thanhxuan.jpg", title: "Venezia, Italia", message: "" },
    { file: "p47_thanhxuan.jpg", title: "Áo dài", message: "" },
    {
      file: "p48_thanhxuan.jpg",
      title: "Teambuilding cùng đồng nghiệp ở Vinalines",
      message: "",
    },
    // { file: "p49_thanhxuan.jpg", title: "", message: "" },
    { file: "p50_thanhxuan.jpg", title: "", message: "" },
    { file: "p51_thanhxuan.jpg", title: "", message: "" },
    { file: "p52_thanhxuan.jpg", title: "", message: "" },
    {
      file: "p53_thanhxuan.jpg",
      title: "Đi bão Việt Nam vô địch!",
      message: "",
    },
    {
      file: "p54_thanhxuan.jpg",
      title: "Khai trương Mái Ngói Xưa",
      message: "",
    },
    {
      file: "p55_thanhxuan.jpg",
      title: "Câu cá ở Honolulu cùng các con",
      message: "",
    },
    { file: "p56_thanhxuan.jpg", title: "Cưỡi ngựa ở Arizona", message: "" },
    {
      file: "p57_thanhxuan.jpg",
      title: "Chuyến trực thăng đầu tiên - Mỹ",
      message: "",
    },
    {
      file: "p58_thanhxuan.jpg",
      title: "Chuyến đi mỹ 2018 cùng các con - Hollywood, LA",
      message: "",
    },
    { file: "p59_thanhxuan.jpg", title: "", message: "" },
    {
      file: "p60_thanhxuan.jpg",
      title: "FLC Samson Beach & Golf Resort",
      message: "",
    },
    {
      file: "p61_thanhxuan.jpg",
      title: "FLC Samson Beach & Golf Resort",
      message: "",
    },
    {
      file: "p62_thanhxuan.jpg",
      title: "Mẹ thắng giải nhất lớp nhiệt huyết nhât - FLC",
      message: "",
    },
    { file: "p63_thanhxuan.jpg", title: "Ngọn Hải Đăng Hòn Chút", message: "" },
    {
      file: "p64_thanhxuan.jpg",
      title: "សៀម រាប Siem Reap, Cambodia",
      message: "",
    },
    {
      file: "p66_thanhxuan.jpg",
      title: "Koh Rong Island, Cambodia",
      message: "",
    },
    {
      file: "p67_thanhxuan.jpg",
      title: "Tình nguyện giúp đỡ các em nhỏ - Xã Cốc Đán",
      message: "",
    },
    {
      file: "p68_thanhxuan.jpg",
      title: "Giải chạy phố đi bộ hồ gươm",
      message: "",
    },
    {
      file: "p69_thanhxuan.jpg",
      title: "Catherine Palace - Saint Peterburg, Russia",
      message: "",
    },
    {
      file: "p70_thanhxuan.jpg",
      title: "ГУМ-Red-Line - Moscow, Russia",
      message: "",
    },
    {
      file: "p71_thanhxuan.jpg",
      title: "Izmailovo Market - Moscow, Russia",
      message: "",
    },
    { file: "p72_thanhxuan.jpg", title: "", message: "" },
    { file: "p73_thanhxuan.jpg", title: "Vientiane, Laos", message: "" },
    {
      file: "p75_thanhxuan.jpg",
      title: "Sen say mặt nước dịu êm",
      message: "",
    },
    { file: "p77_thanhxuan.jpg", title: "", message: "" },
    { file: "p78_thanhxuan.jpg", title: "Ngô", message: "" },
    { file: "p79_thanhxuan.jpg", title: "Đồng Mô Discovery", message: "" },
    {
      file: "p80_thanhxuan.jpg",
      title: "Vườn ca cao - Buôn Mê Thuột",
      message: "",
    },
    { file: "p81_thanhxuan.jpg", title: "Boxing", message: "" },
    {
      file: "p83_thanhxuan.jpg",
      title: "Dubai, United Arab Emirates",
      message: "",
    },
    {
      file: "p84_thanhxuan.jpg",
      title: "Dubai, United Arab Emirates",
      message: "",
    },
  ]),
  ...stagePhotos("03_marriage", [
    { file: "p0_cuoi.jpg", title: "1999 - Ngày cưới", message: "" },
    { file: "p1_cuoi.jpg", title: "Chụp với đồng nghiệp", message: "" },
    {
      file: "p2_cuoi.jpg",
      title: "Ngày cưới của mẹ và bạn thời đại học",
      message: "",
    },
    { file: "p4_cuoi.jpg", title: "Chân dung cưới", message: "" },

    { file: "p11_cuoi.jpg", title: "Ảnh cưới", message: "" },
    { file: "p5_cuoi.jpg", title: "", message: "" },
    { file: "p6_cuoi.jpg", title: "Parliament House, Canberra", message: "" },
    { file: "p7_cuoi.jpg", title: "", message: "" },
    { file: "p8_cuoi.jpg", title: "", message: "" },
    { file: "p9_cuoi.jpg", title: "", message: "" },
    // { file: "p11_cuoi.jpg", title: "", message: "" },
    // { file: "p12_cuoi.jpg", title: "", message: "" },
    { file: "p13_cuoi.jpg", title: "", message: "" },
    { file: "p14_cuoi.jpg", title: "", message: "" },
    { file: "p12_cuoi.jpg", title: "Anh Dũng", message: "" },
    { file: "p3_dung.jpg", title: "Hai con của mẹ", message: "" },
  ]),
  ...stagePhotos("04_family", [
    { file: "p0_caccon.jpg", title: "Đại gia đình nhà họ Phan", message: "" },

    { file: "p2_caccon.jpg", title: "", message: "" },
    { file: "p3_caccon.jpg", title: "", message: "" },
    { file: "p1_caccon.jpg", title: "", message: "" },
    { file: "p5_caccon.jpg", title: "", message: "" },
    { file: "p6_caccon.jpg", title: "", message: "" },
    { file: "p7_caccon.jpg", title: "", message: "" },
    { file: "p8_caccon.jpg", title: "Về quê thăm ông bà", message: "" },
    { file: "p9_caccon.jpg", title: "", message: "" },
    { file: "p10_caccon.jpg", title: "", message: "" },
    { file: "p11_caccon.jpg", title: "", message: "" },
    { file: "p12_caccon.jpg", title: "", message: "" },
    { file: "p13_caccon.jpg", title: "", message: "" },
    { file: "p14_caccon.jpg", title: "", message: "" },
    { file: "p15_caccon.jpg", title: "", message: "" },
    { file: "p16_caccon.jpg", title: "", message: "" },
    { file: "p17_caccon.jpg", title: "", message: "" },
    { file: "p18_caccon.jpg", title: "", message: "" },
    { file: "p19_caccon.jpg", title: "Ông làm ông già noel cho các cháu", message: "" },
    { file: "p20_caccon.jpg", title: "Gôn", message: "" },
    { file: "p21_caccon.jpg", title: "Sydney", message: "" },
    { file: "p22_caccon.jpg", title: "Ông và mẹ ở Nhật", message: "" },
    { file: "p23_caccon.jpg", title: "", message: "" },
    { file: "p25_caccon.jpg", title: "3 mẹ con ở Mỹ", message: "" },
    { file: "p32_thanhxuan.jpg", title: "", message: "" },
    { file: "p26_caccon.jpg", title: "Hawaii", message: "" },
    { file: "p27_caccon.jpg", title: "Six flags", message: "" },
    { file: "p29_caccon.jpg", title: "", message: "" },
    { file: "p74_thanhxuan.jpg", title: "Gạo", message: "" },
  ]),
  ...stagePhotos("05_dung", [
    { file: "p0.0_dung.png", title: "2000", message: "" },

    { file: "p6_dung.jpg", title: "", message: "" },

    { file: "p0_dung.jpg", title: "", message: "" },
    { file: "p1_dung.jpg", title: "", message: "" },
    { file: "p5_dung.jpg", title: "Dũng tốt nghiệp cấp 1", message: "" },
    { file: "p100_dung.jpg", title: "", message: "" },

    { file: "p2_dung.jpg", title: "", message: "" },
    { file: "p4_dung.jpg", title: "", message: "" },
    { file: "p7_dung.jpg", title: "Dũng tập đá bóng", message: "" },
    { file: "p8_dung.jpg", title: "", message: "" },
    { file: "p9_dung.jpg", title: "", message: "" },
    { file: "p10_dung.jpg", title: "Sinh nhật 2015", message: "" },
    { file: "p11_dung.jpg", title: "", message: "" },
    { file: "p14_dung.jpg", title: "", message: "" },
    { file: "p15_dung.jpg", title: "", message: "" },
    { file: "p16_dung.jpg", title: "", message: "" },
    { file: "p17_dung.jpg", title: "", message: "" },
    { file: "p18_dung.jpg", title: "Dũng tốt nghiệp cấp 3", message: "" },
  ]),
  ...stagePhotos("06_nghia", [
    { file: "p0_nghia.jpg", title: "2000", message: "" },
    { file: "p1_nghia.jpg", title: "", message: "" },
    { file: "p2_nghia.jpg", title: "Nghĩa khoe mẹ con tôm", message: "" },
    { file: "p3_nghia.jpg", title: "", message: "" },
    { file: "p4_nghia.jpg", title: "Thắng giải mẹ và con ở VAS", message: "" },
    { file: "p5_nghia.jpg", title: "", message: "" },
    { file: "p6_nghia.jpg", title: "", message: "" },
    { file: "p7_nghia.jpg", title: "", message: "" },
    { file: "p9_nghia.jpg", title: "", message: "" },
    { file: "p10_nghia.jpg", title: "", message: "" },
    { file: "p11_nghia.jpg", title: "", message: "" },
    { file: "p12_nghia.jpg", title: "Sinh nhật 2015", message: "" },
    { file: "p14_nghia.jpg", title: "", message: "" },
    { file: "p8_nghia.jpg", title: "Chúc tết ông bà", message: "" },
    { file: "p15_nghia.jpeg", title: "Tốt nghiệp Phương", message: "" },
  ]),
  ...stagePhotos("09_little_ones", [
    {
      file: "00F25A9B-9199-4590-BB34-710E101747C4_1_105_c.jpeg",
      title: "Bảo Nam lúc mới chào đời",
      message: "",
    },
    {
      file: "06A4F4AE-3696-49E9-8A94-F7BCA71B7AFB_1_105_c.jpeg",
      title: "Khánh An khi mới chào đời",
      message: "",
    },
    {
      file: "1C1C703F-64DD-46D5-A035-6FDC1021BABF_1_105_c.jpeg",
      title: "",
      message: "",
    },
    {
      file: "554FFD31-D73F-4D6A-B977-F147ABAEA4CD_1_105_c.jpeg",
      title: "",
      message: "",
    },
    {
      file: "5E4147FA-431E-4956-A677-0E48EEAE99AF_1_105_c.jpeg",
      title: "",
      message: "",
    },
    {
      file: "6DB4CCC3-13AC-48DD-9417-2938DE592DEF_1_105_c.jpeg",
      title: "",
      message: "",
    },
    {
      file: "8DD97040-BBE1-4351-85BD-23620FD0224F_1_105_c.jpeg",
      title: "Em Nam nghịch lộ mông",
      message: "",
    },
    {
      file: "996DF80B-D6CF-48DA-B443-1172463DEBCB_1_105_c.jpeg",
      title: "",
      message: "",
    },
    {
      file: "A993170B-E12D-454F-92FF-87379016F5FF_1_105_c.jpeg",
      title: "",
      message: "",
    },
    {
      file: "CF7A69CD-2D4A-43CB-8B44-F21FF0557B68_1_105_c.jpeg",
      title: "",
      message: "",
    },
    {
      file: "D7ED821A-666C-43DD-BAE4-4D1008BBAF20_1_105_c.jpeg",
      title: "",
      message: "",
    },
    {
      file: "EF1B8DEF-135F-4D68-A0CD-E1CDE19E935B_1_105_c.jpeg",
      title: "",
      message: "",
    },
    // A video clip: it gets play controls in the album.
    {
      file: "1905F034-7F2E-4D82-8A4A-E07E997E1D85.mov",
      title: "Bảo Nam lần đầu lẫy",
      message: "",
    },
  ]),
  ...stagePhotos("010_you_now", [
    { file: "p0_boston.jpg", title: "Con biết quãng thời gian ở Boston cuộc sống mẹ như bị dừng lại nhưng con rất mong chờ được xem những thứ mẹ sẽ làm trong tương lai", message: "" },
  ]),
  // No photos yet: 07_adventures, 08_love_that_stays, 09_little_ones, 010_you_now
];
