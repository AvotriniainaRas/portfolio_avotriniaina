import type { Locale } from '../config'
import { fr, type Dictionary } from './fr'
import { en } from './en'

export type { Dictionary }

export const DICTIONARIES: Record<Locale, Dictionary> = { fr, en }
