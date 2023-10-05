import Image from 'next/image'
import Slider from '@/components/home/Slider'
import Services from '@/components/Services'
import Header from '@/components/home/Header'
import "../assets/styles/modules/tailwind.css"
export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col gap-[20px]'>
        <Slider />
        <Services />
      </div>
    </>
  )
}
