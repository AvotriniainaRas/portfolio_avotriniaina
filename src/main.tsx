import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { router } from './app/router'
import { ThemeProvider } from './features/theme/ThemeProvider'

// Polices variables : un seul fichier par famille couvre toutes les graisses (le navigateur ne télécharge
// que le sous-ensemble « latin » utile au français, grâce aux unicode-range).
import '@fontsource-variable/inter'
import '@fontsource-variable/fraunces/wght.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* reducedMotion="user" : respecte prefers-reduced-motion pour toutes les animations Framer Motion */}
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </MotionConfig>
  </StrictMode>
)
