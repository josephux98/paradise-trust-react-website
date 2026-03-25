import Hero          from '../components/Hero'
import HomeAbout from '../components/HomeAbout'
import ServicesSection from '../components/ServicesSection'
import Trustees      from '../components/Trustees'
import Testimonials  from '../components/Testimonials'
import Contact       from '../components/Contact'

// Home page = all sections stacked in order
export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <ServicesSection />
      <Trustees />
      <Testimonials />
      <Contact />
    </>
  )
}
