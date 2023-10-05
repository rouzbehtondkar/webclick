'use client';

import { Footer } from 'flowbite-react';
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import {AiOutlineInstagram,AiFillLinkedin,AiOutlineFacebook} from "react-icons/ai"
export default function FooterSitemapLinks() {
  return (
    <Footer className='bg-white'>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                <img src="/img/webclick.png" alt="" />
              </Footer.Link>
              <Footer.Link href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione explicabo at nobis commodi amet, voluptate quas molestiae architecto pariatur consequatur a quibusdam, esse quos culpa dignissimos aliquid saepe totam.
              </Footer.Link>

            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="queekas" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
Home
              </Footer.Link>
              <Footer.Link href="#">
                Services
              </Footer.Link>
              <Footer.Link href="#">
                OurProject
              </Footer.Link>
              <Footer.Link href="#">
                Aboutus
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="meetus" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                09376720694
              </Footer.Link>
              <Footer.Link href="#">
                pooriavakili09@gmail.com
              </Footer.Link>
             
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="followus" />
            <div className='flex'>
            <Footer.LinkGroup>
              <Footer.Link href="#">
                <AiOutlineInstagram style={{fontSize:"25px"}}/>
              </Footer.Link>
              <Footer.Link href="#">
                <AiFillLinkedin style={{fontSize:"25px"}}/>
              </Footer.Link>
              <Footer.Link href="#">
               <AiOutlineFacebook style={{fontSize:"25px"}}/>
              </Footer.Link>
              
            </Footer.LinkGroup>
            </div>
            
          </div>
        </div>
        <div className="w-full p-2 flex bg-white  justify-center items-center">
          @2023 webclick,all rights Recerved
          
        </div>
      </div>
    </Footer>
  )
}
