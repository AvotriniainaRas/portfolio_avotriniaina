import { Hero } from './Hero'
import { StackMarquee } from './StackMarquee'
import { ShowcaseSection } from '../showcase/ShowcaseSection'
import { WhyHireMe } from './WhyHireMe'
// import { AboutPreview } from './AboutPreview'
import { FinalCta } from '../../shared/components/FinalCta'

export function HomePage() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <ShowcaseSection />
      <WhyHireMe />
      {/* <AboutPreview /> */}
      <FinalCta />
    </>
  )
}
