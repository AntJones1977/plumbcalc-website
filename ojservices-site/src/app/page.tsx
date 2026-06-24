import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WorkGallery } from '@/components/work-gallery'
import { Videos } from '@/components/videos'
import { WhyUs } from '@/components/why-us'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { ServiceArea } from '@/components/service-area'
import { Contact } from '@/components/contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WorkGallery />
      <Videos />
      <WhyUs />
      <Process />
      <Testimonials />
      <ServiceArea />
      <Contact />
    </>
  )
}
