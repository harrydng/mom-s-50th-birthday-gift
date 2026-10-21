import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n'
import { TestView } from './test/TestView.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      {location.pathname.replace(/\/$/, '') === '/test' ? <TestView /> : <App />}
    </LanguageProvider>
  </StrictMode>,
)
