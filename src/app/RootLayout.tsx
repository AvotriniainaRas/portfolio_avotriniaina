import { Outlet } from 'react-router-dom'
import { Navbar } from '../shared/components/Navbar'
import { Footer } from '../shared/components/Footer'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
