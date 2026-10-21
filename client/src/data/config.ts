// Site-wide text and media paths. Put files in client/public/media/.
export const config = {
  pageTitle: 'Best Mom Ever',
  envelope: {
    skip: 'Bỏ qua →',
  },
  letters: {
    navLabel: 'Thư',
    openAlbum: 'Tiếp',
    close: 'Đóng thư',
    // Not real security: just a plain comparison in the browser.
    password: 'harry',
    lockTitle: 'Thư đang được khoá',
    passwordPlaceholder: 'Mật khẩu',
    unlock: 'Mở thư',
    wrongPassword: 'Sai mật khẩu rồi, thử lại nhé',
    noPassword: 'Không có mật khẩu? Xem dòng thời gian →',
  },
  music: {
    volume: 0.5,
    nothingPlaying: 'Chưa có nhạc',
    prev: 'Bài trước',
    next: 'Bài sau',
    play: 'Phát nhạc',
    pause: 'Tạm dừng',
    mute: 'Tắt tiếng',
    unmute: 'Bật tiếng',
  },
  album: {
    prev: '← Trước',
    next: 'Tiếp →',
    autoPlay: 'Tự động chuyển',
    autoPause: 'Dừng tự động',
    // How long each photo stays up in auto mode, in milliseconds (5000 = 5 seconds).
    autoIntervalMs: 3000,
    finalSection: 'Lời nhắn cuối',
    timelineButton: 'Xem dòng thời gian',
    backToAlbum: 'Quay lại album',
    timelineTitle: 'Dòng thời gian',
  },
  video: {
    intro: 'Và đây là lời chúc dành cho mẹ hôm nay…',
    playLabel: '▶ Phát video',
    src: '/media/video/happy-birthday.mp4',
    poster: '/media/video/poster.jpg',
    navLabel: 'Video',
  },
  nav: {
    menu: 'Menu',
  },
  skip: {
    button: 'Bỏ qua ⏭',
    warning: 'Nên ở lại đến cuối để trải nghiệm trọn vẹn món quà này nhé',
    stay: 'xem tiếp',
    leave: 'bỏ qua',
  },
}
