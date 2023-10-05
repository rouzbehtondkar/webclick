import Image from 'next/image'
import Slider from  '@/components/home/Slider'
import Services from '@/components/Services'
import Header from '@/components/Header'



export default function Home() {
  return (
    <div className='flex flex-col gap-[20px]'>
      <Header/>
<Slider/>
<Services/>
    </div>

  )
}
