import { useState } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
  /** Size classes for the placeholder shown when the file is missing. */
  fallbackClassName?: string
}

/** <img> that falls back to a paper placeholder if the file is missing. */
export function PhotoImage({ src, alt, className, fallbackClassName = 'h-80 w-64' }: Props) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-(--paper-edge) text-4xl ${fallbackClassName}`}
        role="img"
        aria-label={alt}
      >
        📷
      </div>
    )
  }
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}
