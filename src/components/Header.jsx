import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  })

  return <div className="Header">
      <div className="logo">
        Portfolio
      </div>
      <nav>
        <ul>
          <li>
            <a href="#Intro"><i className="fa-solid fa-user"></i></a>
          </li>
          <li><a href="#Services"><i className="fa-solid fa-handshake"></i></a></li>
          <li>
            <a href="#Skills"><i className="fa-solid fa-book"></i></a>
          </li>
          {/* <li>
            <a href="#Resume">Resume</a>
          </li> */}
          <li>
            <a href="#Projects"><i className="fa-solid fa-briefcase"></i></a>
          </li>
          <li>
            <a href="#Contact"><i className="fa-solid fa-address-card"></i></a>
          </li>
        </ul>
      </nav>
  </div>
}

