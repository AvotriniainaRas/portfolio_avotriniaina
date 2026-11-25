import { CV_FILES } from '../../config/cv'
import { LOCALES } from '../../i18n/config'
import { LocalizedLink } from '../../i18n/LocalizedLink'
import { useI18n } from '../../i18n/useI18n'
import type { RouteKey } from '../../i18n/routes'
import { SOCIAL_LINKS } from '../data/socialLinks'
import { SlideLabel } from './SlideLabel'

const NAV_LINKS = [
  'home',
  'projects',
  'about',
  'contact',
] as const satisfies readonly RouteKey[]

const LINK_BASE =
  'group flex items-center text-text-muted transition-colors hover:text-text'

/** Îlot sombre : la classe `dark` inverse les jetons, le pied de page reste noir dans les deux thèmes. */
export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  const headingClass = 'font-display text-lg font-semibold'

  return (
    <footer className="dark border-t border-line bg-black text-text">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <LocalizedLink to="home" className="inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-text text-sm font-bold text-surface"
              >
                AR
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Avotriniaina Ras
              </span>
            </LocalizedLink>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {t.footer.tagline}
              <br />
              {t.footer.availability}
            </p>
          </div>

          <nav aria-label={t.footer.navTitle}>
            <h2 className={headingClass}>{t.footer.navTitle}</h2>
            <ul className="mt-4 flex w-fit flex-col gap-2.5 text-sm">
              {NAV_LINKS.map((key) => (
                <li key={key}>
                  <LocalizedLink to={key} className={LINK_BASE}>
                    <SlideLabel>{t.nav[key]}</SlideLabel>
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>{t.footer.cvTitle}</h2>
            <ul className="mt-4 flex w-fit flex-col gap-2.5 text-sm">
              {LOCALES.map((l) => (
                <li key={l}>
                  <a href={CV_FILES[l]} download lang={l} className={LINK_BASE}>
                    <SlideLabel>{t.cv.options[l]}</SlideLabel>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>{t.footer.contactTitle}</h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-text-muted transition-colors hover:text-accent-text"
                    >
                      <Icon size={16} className="shrink-0" />
                      {social.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-xs text-text-muted">
          {t.footer.rights(year)}
        </p>
      </div>
    </footer>
  )
}
