import { Outlet } from 'react-router-dom'
import { Navbar } from '../shared/components/Navbar'

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  )
}
