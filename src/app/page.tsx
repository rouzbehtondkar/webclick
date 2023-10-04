import Image from 'next/image'
import Slider from  '@/components/home/Slider'
import Services from '@/components/Services'


export default function Home() {
  return (
    <div className='flex flex-col gap-[20px]'>
<Slider/>
<Services/>
    </div>

  )
}
