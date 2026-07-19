const STACK_LOOP = [
  'React TS',
  'Spring Boot',
  'NestJS',
  'Flutter',
  'PostgreSQL',
  'Docker',
  'Tailwind CSS',
  'Framer Motion',
]

export function StackMarquee() {
  // Le tableau est dupliqué pour créer une boucle continue sans coupure visible.
  const loop = [...STACK_LOOP, ...STACK_LOOP]

  return (
    <div className="group relative overflow-hidden border-y border-gray-900 bg-gray-950 py-5 dark:border-gray-800">
      <div className="flex w-max animate-marquee items-center">
        {loop.map((tech, index) => (
          <span key={`${tech}-${index}`} className="flex items-center">
            <span className="px-6 text-lg font-bold tracking-tight whitespace-nowrap text-white sm:text-xl">
              {tech}
            </span>
            <span
              aria-hidden="true"
              className={`text-lg font-bold sm:text-xl ${
                index % 2 === 0 ? 'text-accent' : 'text-primary-light'
              }`}
            >
              +
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
