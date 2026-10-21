import { useEffect, useState, type ReactNode } from 'react'
import { LangContext, type Lang } from './context'

const STORAGE_KEY = 'lang'

function savedLang(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'vi'
  } catch {
    return 'vi'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(savedLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Private mode etc.: the choice just isn't remembered.
    }
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}
