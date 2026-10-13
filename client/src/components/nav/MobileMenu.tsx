import { useEffect, useRef, useState } from 'react'
import { config } from '../../data/config'

export interface MenuItem {
  label: string
  icon: string
  onClick: () => void
}

/** Phone-only dropdown (top-left) that replaces the bottom envelope/video buttons. */
export function MobileMenu({ items }: { items: MenuItem[] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: Event) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('pointerdown', close)
      document.removeEventListener('keydown', close)
    }
  }, [open])

  if (items.length === 0) return null

  return (
    <div ref={ref} className="absolute left-3 top-3 md:hidden">
      <button
        className="flex h-11 cursor-pointer items-center gap-1 rounded-full bg-(--paper)/90 px-2 shadow-lg backdrop-blur"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={config.nav.menu}
      >
        <img src="/envelop.png" alt="" className="size-8 object-contain" />
        <span className={`text-xs text-(--accent-dark) transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden>▼</span>
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute left-0 top-13 m-0 w-56 list-none rounded-2xl bg-(--paper) p-2 shadow-2xl animate-[fade-in_0.2s_ease_both]"
        >
          {items.map((item) => (
            <li key={item.label} role="none">
              <button
                role="menuitem"
                className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-left text-(--ink) hover:bg-(--accent)/10"
                onClick={() => {
                  setOpen(false)
                  item.onClick()
                }}
              >
                <img src={item.icon} alt="" className="size-9 object-contain" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
