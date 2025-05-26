import AboutUs from '@/app/_components/AboutUs'
import HowWeWork from '@/app/_components/HowWeWork'
import OurTeam from '@/app/_components/OurTeam'
import OurVision from '@/app/_components/OurVision'
import TestimonialSection from '@/app/_components/Testimonial'
import React from 'react'

function page() {
  return (
    <div className='pt-[100px] md:pt-[85px]'>
      <AboutUs />
      {/* <TestimonialSection />
      <OurVision/> */}
      <HowWeWork />
      <OurTeam />
    </div>
  )
}

export default page