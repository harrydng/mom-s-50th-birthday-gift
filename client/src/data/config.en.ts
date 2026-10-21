import { config } from './config'

// English text for the site. Same shape as config.ts; paths and numbers are
// shared, so only the words are written here.
export const configEn: typeof config = {
  ...config,
  envelope: {
    skip: 'Skip →',
    openLabel: 'Open the letter to Mom',
    greeting: 'Dear Mom,',
  },
  letters: {
    ...config.letters,
    navLabel: 'Letter',
    openAlbum: 'Next',
    close: 'Close letter',
    lockTitle: 'This letter is locked',
    passwordPlaceholder: 'Password',
    unlock: 'Open letter',
    wrongPassword: 'Wrong password, please try again',
    noPassword: 'No password? See the timeline →',
  },
  music: {
    ...config.music,
    nothingPlaying: 'Nothing playing',
    prev: 'Previous song',
    next: 'Next song',
    play: 'Play music',
    pause: 'Pause',
    mute: 'Mute',
    unmute: 'Unmute',
  },
  album: {
    ...config.album,
    prev: '← Previous',
    next: 'Next →',
    autoPlay: 'Auto play',
    autoPause: 'Stop auto play',
    finalSection: 'Final message',
    timelineButton: 'View timeline',
    backToAlbum: 'Back to album',
    timelineTitle: 'Timeline',
  },
  video: {
    ...config.video,
    intro: 'And here is a birthday wish for you today…',
    playLabel: '▶ Play video',
    navLabel: 'Video',
    lockTitle: 'This video is locked',
    unlock: 'Open video',
  },
  memory: {
    defaultTitle: 'Memory',
    altWithYear: 'Memory from',
    footer: 'For Mom',
  },
  nav: {
    menu: 'Menu',
  },
  language: {
    label: 'Language',
  },
  skip: {
    button: 'Skip ⏭',
    warning: 'Stay until the end to enjoy the whole gift',
    stay: 'keep watching',
    leave: 'skip',
  },
}
