
'use client';

import { useTranslation } from "next-i18next"

import { Button, Navbar } from 'flowbite-react';
import Link from 'next/link'

function Header(){


return(
  <>
   <Navbar
      fluid
      rounded
      className="mt-3"
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/img/webclick.png"
        />
      
      </Navbar.Brand>
     
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
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          OurProject
        </Navbar.Link>
        <Navbar.Link href="#">
          Aboutus
        </Navbar.Link>
       <select className="-mt-2">
        <option>en</option>
        <option>fa</option>
       </select>
      </Navbar.Collapse>
      <div className="flex justify-between ">
        <Button className="2xl:-mt-2 4xl:mt-5 5xl:mt-5 xs:mt-5 xl:-mt-2 md:mt-0 sm:mt-5 lg:-mt-2">
         contactus
        </Button>
        <Navbar.Toggle className="ml-10 mt-5 4xl:mt-5 5xl:mt-5 xs:mt-5"/>
      </div>
    </Navbar>
  </>
    
)
}
export default Header
