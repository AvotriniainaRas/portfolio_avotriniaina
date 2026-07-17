import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './RootLayout'
import { HomePage } from '../features/home/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
])
