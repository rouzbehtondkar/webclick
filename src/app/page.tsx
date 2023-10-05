
import Image from 'next/image'
import Slider from '@/components/home/Slider'
import Services from '@/components/Services'
import Header from '@/components/home/Header'
import "../assets/styles/modules/tailwind.css"
import FooterSitemapLinks from "@/components/home/Footer"
export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col gap-[20px]'>
        <Slider />
        <Services />
       
      </div>
      <div style={{marginTop:"600px"}}>
      <FooterSitemapLinks/>
      </div>

    </>
  )
}
