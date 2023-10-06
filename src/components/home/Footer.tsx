'use client';

import { Footer } from 'flowbite-react';
import {AiOutlineInstagram,AiFillLinkedin,AiOutlineFacebook} from "react-icons/ai"
export default function FooterSitemapLinks() {
  return (
    <div style={{backgroundColor:"#F5F5F5"}} className=''>
<div className='2xl:flex xl:flex lg:block justify-around '>
  <div className='flex flex-col'>
    <div><img src='/img/webclick.png'/></div>
    <div>Lorem ipsum, dolor  magni omnis quas id</div>
  </div>
  <div className='flex flex-col'>
    <div>Quick access</div>
    <div>Home</div>
    <div>Services</div>
    <div>Ourproject</div>
    <div>Aboutus</div>
  </div>
  <div className='flex flex-col'>
    <div>meetus</div>
    <div>09376720694</div>
    <div>pooriavakili09@gmail.com</div>
  </div>
  <div className='flex flex-col'>
    <div>followus</div>
    <div className='flex'>
      <div><AiOutlineInstagram/></div>
      <div><AiFillLinkedin/></div>
      <div><AiOutlineFacebook/></div>
    </div>
    
  </div>
  </div>
    </div>


  )
}
