import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import {AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
            <TitleLogo title='SetupWeb' className='logobg'/>
              <br />
              <span>
                SetupWeb is a company that provides services related to digital marketing,
                web and app development and online presence.They specialize in helping businesses establish
                and enhance their online presence, reach their target audience and achieve there Marketing
                goals through various digital channels.
              </span>
              <br />
              <br />
              <br />
              <br />
              <button className='button-primary'>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSdzQwat6ncrKleyjRUWK6XkwWccq5xSuyEKJPwbh9xiqGVzGA/viewform?usp=sf_link' target="_blank" id="btn-text" class="btn-text">Get Touch With Us</a>
                </button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/agency'>About agency</Link>
              </li>
              <li>
                <Link href='/showcase'>Showcase</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/services'>Web Design & Development</Link>
              </li>
              <li>
                <Link href='/services'>App Design & Development</Link>
              </li>
              <li>
                <Link href='/services'>Branding & Creative Services</Link>
              </li>
              <li>
                <Link href='/services'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/services'>Graphic Design</Link>
              </li>
              <li>
                <Link href='/showcase'>SEO</Link>
              </li>
              <li>
                <Link href='/showcase'> Logo Design</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href="https://www.facebook.com/profile.php?id=61556665491116&mibextid=LQQJ4d" target="_blank">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/setupweb_in?igsh=MTE4bzg0MWZ4bzFiMg%3D%3D&utm_source=qr" target="_blank">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://youtube.com/@setupweb_in?si=x4LfVOi0iw18BksZ' target="_blank">
                    <AiFillYoutube size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/SetupWeb01?t=GHGISPCRV994dzfE7DpRVw&s=09" target="_blank">
                    <AiFillTwitterCircle size={25} />
                  </Link>
                </li>
              
              </div>

            </ul>
            
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 SetupWeb. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>By SetupWeb</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
