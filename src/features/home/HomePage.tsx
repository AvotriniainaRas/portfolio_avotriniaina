import { Hero } from './Hero'
import { StackMarquee } from './StackMarquee'
import { ProjectsPreview } from './ProjectsPreview'
import { WhyHireMe } from './WhyHireMe'
// import { AboutPreview } from './AboutPreview'
import { FinalCta } from '../../shared/components/FinalCta'

export function HomePage() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <ProjectsPreview />
      <WhyHireMe />
      {/* <AboutPreview /> */}
      <FinalCta />
    </>
  )
}
