import React, { useEffect } from "react";
import "./Intro.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  useGSAP(()=>{
    gsap.ticker.lagSmoothing(0);

    gsap.from(".intname", {
      filter: "none",
      textShadow: "none",
      y:-1000,
      duration: 2,
      delay: 2,
      ease: "bounce.out",
    })

    gsap.to(".smalling",{
      scale: 0.8,
      ease: "bounce.In",
      scrollTrigger: {
        trigger: '.Main',
        start: "top bottom",
        end: "top 100",
        scrub: 0.5,
        pin: "#Intro",
        pinSpacing: false
      }
    })

    gsap.fromTo(".spec",{
      y: 200
    },{
      opacity: 1,
      background: 'inherit',
      color: 'transparent',
      y: 0,
      duration: 1,
      delay: 2,
      onComplete: ()=>{
        setTimeout(
          document.body.style.overflow = ""
        ,3000)
      }
    })

    gsap.from(".img1", {
      opacity: 0,
      x: -200,
      duration: 1,
      delay: 2,
      ease: "ease.inOut"
    })
  },[])
  

  return (
    <section id="Intro">
      <div className="smalling">
        <img
          className="img1"
          src="profile.jpg"
          alt="myself"
        ></img>
        <div className="backtest">
          <div className="spec">Hi I'm</div>
          <h1 className="intname">Chada Sree Manish</h1>
          <div className="spec">
            I'm a Front End Developer, I have a passion for web development and
            love to create websites that are visually appealing and user-friendly.
          </div>
        </div>
      </div>
    </section>
  );
}
