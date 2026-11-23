import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { seoFiles } from './vite-plugins/seo-files'
import { resolveSiteUrl } from './src/config/siteUrl'

export default defineConfig(({ mode }) => {
  // Lit VITE_SITE_URL (fichier .env ou variable d'environnement du build) pour le sitemap.
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    plugins: [react(), tailwindcss(), seoFiles(resolveSiteUrl(env.VITE_SITE_URL))],
  }
})
