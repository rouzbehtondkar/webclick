
import Image from 'next/image'
import Slider from '@/components/home/Slider'
import Service from '@/components/home/Service'
import Header from '@/components/home/Header'
import "../assets/styles/modules/tailwind.css"
import FooterSitemapLinks from "@/components/home/Footer"
import Team from '@/components/Team'
export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col gap-[20px]'>
        <Slider />
        <Service/>
<<<<<<< HEAD
=======
        <Team/>
>>>>>>> ea7807b2fcbb74ef8cbf7b9bd6967513a0d2be51
       
      </div>
      <div style={{marginTop:"50px"}}>
      <FooterSitemapLinks/>
      </div>

    </>
  )
}