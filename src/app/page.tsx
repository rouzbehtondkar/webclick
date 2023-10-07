
import Image from 'next/image'

import Slider from  '@/components/home/Slider'
import Work from '@/components/home/Work'
import Service from '@/components/home/Service'
import Header from '@/components/home/Header'
import "../assets/styles/modules/tailwind.css"
import FooterSitemapLinks from "@/components/home/Footer"
import Team from '@/components/Team'
import OurTeam from '@/components/home/OurTeam'
import Cooperation from '@/components/Cooperation'
import Newsletter from '@/components/Newsletter'
export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col gap-[45px]'>
        <Slider />
        <Service/>

        <Team/>
        <OurTeam/>

       
      </div>
      <div style={{marginTop:"200px"}}>
        <Cooperation />
        <Newsletter />
      </div>
      <div style={{marginTop:"50px"}}>
      <FooterSitemapLinks/>
      </div>
    </>
  )
}