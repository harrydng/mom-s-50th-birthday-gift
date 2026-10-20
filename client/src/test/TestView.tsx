import { useState } from 'react'
import { photos } from '../data/photos'
import { stages } from '../data/stages'

/** Plain checklist of every album photo: thumbnail, name and file, one per row. */
function Thumb({ src }: { src: string }) {
  const [missing, setMissing] = useState(false)
  return missing ? (
    <span style={{ color: 'crimson', fontWeight: 600 }}>MISSING</span>
  ) : (
    <img src={src} alt="" loading="lazy" onError={() => setMissing(true)} style={{ height: 165, display: 'block' }} />
  )
}

export function TestView() {
  return (
    <div style={{ font: '14px/1.4 system-ui, sans-serif', padding: 16, background: '#fff', color: '#111', minHeight: '100vh' }}>
      <h1 style={{ fontSize: 20, margin: '0 0 4px' }}>Album test view ({photos.length} photos)</h1>
      <p style={{ margin: '0 0 16px', color: '#666' }}>Same order as the album. Data comes from src/data/photos.ts.</p>

      {stages.map((stage) => {
        const rows = photos.map((p, i) => ({ p, n: i + 1 })).filter(({ p }) => p.stageId === stage.id)
        if (rows.length === 0) return null
        return (
          <section key={stage.id} style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 16, margin: '0 0 6px' }}>
              {stage.label} <span style={{ color: '#888', fontWeight: 400 }}>({rows.length}) {stage.id}</span>
            </h2>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <tbody>
                {rows.map(({ p, n }) => (
                  <tr key={p.id} style={{ borderTop: '1px solid #ddd' }}>
                    <td style={{ padding: '4px 10px 4px 0', color: '#888', width: 40 }}>{n}</td>
                    <td style={{ padding: 4, width: 240 }}><Thumb src={p.src} /></td>
                    <td style={{ padding: 4, width: 200 }}>{p.title ?? '—'}</td>
                    <td style={{ padding: 4, fontFamily: 'ui-monospace, monospace' }}>{p.src.split('/').pop()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )
      })}
    </div>
  )
}
