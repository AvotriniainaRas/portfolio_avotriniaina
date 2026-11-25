import { Link } from 'react-router-dom'
import { LOCALES, LOCALE_NAMES, storeLocale, type Locale } from '../../i18n/config'
import { useAlternatePath, useI18n } from '../../i18n/useI18n'

/** Un lien par langue : un vrai <a href>, donc crawlable, ouvrable dans un nouvel onglet, accessible au clavier. */
function LocaleOption({ target, active }: { target: Locale; active: boolean }) {
  const { t } = useI18n()
  const href = useAlternatePath(target)

  return (
    <Link
      to={href}
      lang={target}
      hrefLang={target}
      aria-current={active ? 'true' : undefined}
      aria-label={
        active ? LOCALE_NAMES[target] : t.language.switchTo(LOCALE_NAMES[target])
      }
      // On mémorise le choix UNIQUEMENT quand le visiteur clique : arriver sur /en par un lien partagé
      // ne doit pas écraser sa préférence.
      onClick={() => storeLocale(target)}
      className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide uppercase transition-colors ${
        active ? 'bg-text text-surface' : 'text-text-muted hover:text-text'
      }`}
    >
      {target}
    </Link>
  )
}

export function LanguageSwitcher() {
  const { locale, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.language.groupLabel}
      className="flex items-center rounded-full border border-line p-0.5"
    >
      {LOCALES.map((l) => (
        <LocaleOption key={l} target={l} active={l === locale} />
      ))}
    </div>
  )
}
