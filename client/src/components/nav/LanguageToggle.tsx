import { useConfig, useLang, type Lang } from '../../i18n'

const options: { lang: Lang; label: string }[] = [
  { lang: 'vi', label: 'VI' },
  { lang: 'en', label: 'EN' },
]

/** Top-right VI / EN switch for the whole site. */
export function LanguageToggle() {
  const config = useConfig()
  const { lang, setLang } = useLang()

  return (
    <div
      className="absolute right-3 top-3 flex h-11 items-center rounded-full bg-(--paper)/90 p-1 shadow-lg backdrop-blur md:right-4 md:top-4"
      role="group"
      aria-label={config.language.label}
    >
      {options.map((o) => (
        <button
          key={o.lang}
          className={`h-full cursor-pointer rounded-full px-2 text-xs tracking-wider transition md:px-3 md:text-sm ${
            lang === o.lang ? 'bg-(--accent) text-white shadow-sm' : 'text-(--accent-dark) hover:bg-(--accent)/10'
          }`}
          onClick={() => setLang(o.lang)}
          aria-pressed={lang === o.lang}
          lang={o.lang}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
