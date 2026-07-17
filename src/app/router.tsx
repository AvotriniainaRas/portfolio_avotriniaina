import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './RootLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      // les routes des features viendront ici (Home, Projects, About, Contact)
    ],
  },
])
