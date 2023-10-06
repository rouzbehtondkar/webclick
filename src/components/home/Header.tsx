
'use client';

import { useTranslation } from "next-i18next"
import { Button, Navbar } from 'flowbite-react';

import Link from 'next/link'

function Header(){


return(
  <>
<div className="hidden 2xl:flex xl:flex  justify-around  mt-5">
  <div><img src="/img/webclick.png"/></div>
  <div className="gap-6 flex">
    <Link href="/">Home</Link>
    <Link href="/">services</Link>
    <Link href="/">ourProject</Link>
    <Link href="/">Aboutus</Link>
    <div className="2xl:-mt-2 xl:-mt-2 lg:-mt-2 mt-0">
    <select>
      <option>en</option>
      <option>fa</option>
    </select>
    </div>
   
  </div>
  <div>
  <Link href="/" className="bg-blue-500 w-[135px] 2xl:-mt-4 xl:-mt-4 lg:-mt-4 mt-0 h-[52px] rounded-[12px] flex justify-center items-center text-white ">contactus</Link>

  </div>
</div>
<div className="block 2xl:hidden xl:hidden lg:hidden">
<Navbar
      fluid
      rounded
    >
      <Navbar.Brand >
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/img/webclick.png"
        />
       
      </Navbar.Brand>
      <div className="flex md:order-2">
      <Link href="/" className="bg-blue-500 w-[135px] h-[52px] rounded-[12px] flex justify-center items-center text-white ">contactus</Link>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
        services
        </Navbar.Link>
        <Navbar.Link href="#">
        ourProject
        </Navbar.Link>
        <Navbar.Link href="#">
        Aboutus
        </Navbar.Link>
        <select>
      <option>en</option>
      <option>fa</option>
    </select>
      </Navbar.Collapse>
    </Navbar>
</div>
  </>
    
)
}
export default Header
