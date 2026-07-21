import { Mail, Phone } from 'lucide-react'
import { LinkedinIcon, GithubIcon, FacebookIcon } from '../../../shared/icons/BrandIcons'
import type { ComponentType } from 'react'

export interface ContactMethod {
  label: string
  value: string
  href: string
  icon: ComponentType<{ size?: number; className?: string }>
  external?: boolean
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    label: 'E-mail',
    value: 'avotriniainaras2@gmail.com',
    href: 'mailto:avotriniainaras2@gmail.com',
    icon: Mail,
  },
  {
    label: 'Téléphone / WhatsApp',
    value: '+261 38 09 993 36',
    href: 'https://wa.me/261380999336',
    icon: Phone,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Avotriniaina Rasamimanana',
    href: 'https://www.linkedin.com/in/avotriniaina-rasamimanana-2b8435364/',
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: '@AvotriniainaRas',
    href: 'https://github.com/AvotriniainaRas',
    icon: GithubIcon,
    external: true,
  },
  {
    label: 'Facebook',
    value: 'Avotriniaina Ras',
    href: 'https://www.facebook.com/avotriniaina.ras.249982',
    icon: FacebookIcon,
    external: true,
  },
]
