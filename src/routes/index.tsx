import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '~/components/Nav'
import { Hero } from '~/components/Hero'
import {
  Build,
  Faq,
  Features,
  Footer,
  Marquee,
  Platforms,
  Protocols,
  Resources,
  Support,
  TaglineReveal,
  TechStack,
  Translate,
} from '~/components/Sections'
import { useScrollReveal } from '~/components/Reveal'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <TaglineReveal />
        <Features />
        <Protocols />
        <Platforms />
        <Build />
        <Translate />
        <TechStack />
        <Faq />
        <Resources />
        <Support />
      </main>
      <Footer />
    </>
  )
}
