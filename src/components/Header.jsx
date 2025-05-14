import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";
 
export default function Header() {

  useGSAP(()=>{
    gsap.from(".logo",{
      opacity: 0,
      duration: 1,
    })

    gsap.from(".logo",{
      x: window.innerWidth/2,
      y: (window.innerHeight/2)-50,
      xPercent: -50,
      yPercent: -50,
      duration: 1,
      delay:  1,
      scale: 5,
      ease: "Ease.InOut"
    })
    
    gsap.from("nav",{
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 2
    })
  }, [])

  return <div className="Header">
      <div className="logo">
        Portfolio
      </div>
      <nav>
      <ul>
          <li>
            <Link
              to="Intro"
              spy={true}
              smooth={true}
              offset={-900}
              duration={700}
              activeClass="active"
              className="link-style"
            >
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
          <li>
            <Link
              to="Services"
              spy={true}
              smooth={true}
              duration={700}
              activeClass="active"
              className="link-style"
            >
              <i className="fa-solid fa-handshake"></i>
            </Link>
          </li>
          <li>
            <Link
              to="Skills"
              spy={true}
              smooth={true}
              duration={700}
              activeClass="active"
              className="link-style"
            >
              <i className="fa-solid fa-book"></i>
            </Link>
          </li>
          {/* <li>
            <Link
              to="Resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              style={linkStyle}
            >
              Resume
            </Link>
          </li> */}
          <li>
            <Link
              to="Projects"
              spy={true}
              smooth={true}
              duration={700}
              activeClass="active"
              className="link-style"
            >
              <i className="fa-solid fa-briefcase"></i>
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              duration={700}
              activeClass="active"
              className="link-style"
            >
              <i className="fa-solid fa-address-card"></i>
            </Link>
          </li>
        </ul>
      </nav>
  </div>
}

