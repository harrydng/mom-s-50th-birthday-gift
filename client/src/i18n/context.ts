import { createContext, useContext } from 'react'
import { config } from '../data/config'
import { configEn } from '../data/config.en'
import { en } from '../data/translations'

export type Lang = 'vi' | 'en'

export const LangContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: 'vi',
  setLang: () => {},
})

export const useLang = () => useContext(LangContext)

/** Site text in the current language (see config.ts / config.en.ts). */
export function useConfig() {
  return useLang().lang === 'en' ? configEn : config
}

/** Translates Vietnamese data text (stage names, photo titles); untranslated text stays Vietnamese. */
export function useT() {
  const { lang } = useLang()
  return (vi: string) => (lang === 'en' && en[vi]) || vi
}
