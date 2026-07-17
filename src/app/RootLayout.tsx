import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      {/* Nav viendra ici */}
      <main>
        <Outlet />
      </main>
      {/* Footer viendra ici */}
    </div>
  )
}
