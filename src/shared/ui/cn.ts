/** Assemble des classes CSS en ignorant les valeurs vides : cn('a', cond && 'b') -> 'a b' ou 'a'. */
export function cn(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(' ')
}
