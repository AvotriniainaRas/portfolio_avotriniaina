import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './RootLayout'
import { HomePage } from '../features/home/HomePage'
import { ProjectsPage } from '../features/projects/ProjectsPage'
import { ProjectDetailPage } from '../features/projects/ProjectDetailPage'
import { AboutPage } from '../features/about/AboutPage'
import { ContactPage } from '../features/contact/ContactPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projets', element: <ProjectsPage /> },
      { path: 'projets/:slug', element: <ProjectDetailPage /> },
      { path: 'a-propos', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])
