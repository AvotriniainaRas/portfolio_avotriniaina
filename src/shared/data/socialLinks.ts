import { Mail, MessageCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../icons/BrandIcons'
import type { ComponentType } from 'react'

export interface SocialLink {
  label: string
  href: string
  icon: ComponentType<{ size?: number; className?: string }>
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'E-mail',
    href: 'mailto:avotriniainaras2@gmail.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/261380999336',
    icon: MessageCircle,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/avotriniaina-rasamimanana-2b8435364/',
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AvotriniainaRas',
    icon: GithubIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/avotriniaina.ras.249982',
    icon: FacebookIcon,
  },
]
