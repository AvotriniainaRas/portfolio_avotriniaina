import type { Locale } from '../i18n/config'

/**
 * Les deux CV téléchargeables. Les fichiers vivent dans public/cv/ et sont servis tels quels :
 * ajouter une langue = ajouter une ligne ici et le fichier PDF correspondant.
 */
export const CV_FILES: Record<Locale, string> = {
  fr: '/cv/CV_RASAMIMANANA_Avotriniaina_FR.pdf',
  en: '/cv/CV_RASAMIMANANA_Avotriniaina_EN.pdf',
}
