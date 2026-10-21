export interface Letter {
  id: string
  /** Button label that opens this letter, e.g. "Con trai" */
  tabLabel: string
  /** Small heading above the letter, e.g. "Một lời nhắn từ bố" */
  title: string
  paragraphs: string[]
  signature: string
  /** English version, shown when the site is switched to English */
  en?: { title: string; paragraphs: string[]; signature: string }
}

export interface LifeStage {
  id: string
  label: string
}

export interface Photo {
  id: string
  /** Path under /public, e.g. "/media/photos/01.jpg" */
  src: string
  /** Year or age label shown under the photo, e.g. "1976" */
  year: string
  stageId: LifeStage['id']
  /** Optional heading on the message note */
  title?: string
  message: string
}

export type View = 'envelope' | 'album' | 'timeline'

export interface Song {
  title: string
  artist: string
  /** Path under /public, e.g. "/media/audio/01.mp3" */
  src: string
}
