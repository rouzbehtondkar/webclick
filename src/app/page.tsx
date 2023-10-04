import Image from 'next/image'
import Slider from  '@/components/home/Slider'
import Work from '@/components/home/Work'


export default function Home() {
  return (
    <div className='flex flex-col gap-[20px]'>
        <Slider/>
        <Work />
    </div>

  )
}
