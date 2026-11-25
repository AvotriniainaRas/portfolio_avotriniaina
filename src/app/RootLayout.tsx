import { Outlet } from 'react-router-dom'
import { Navbar } from '../shared/components/Navbar'
import { Footer } from '../shared/components/Footer'
import { ScrollToTop } from '../shared/components/ScrollToTop'
import { SkipLink } from '../shared/components/SkipLink'
import { RouteAnnouncer } from '../shared/components/RouteAnnouncer'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-text transition-colors">
      <SkipLink />
      <ScrollToTop />
      <Navbar />
      {/* tabIndex -1 : la cible du lien d'évitement peut recevoir le focus sans entrer dans l'ordre de tabulation */}
      <main id="main" tabIndex={-1} className="flex-1 pt-16 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      <RouteAnnouncer />
    </div>
  )
}
