import React from "react";
import "./Skills.css";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {

  useGSAP(()=>{
    gsap.to(".skcards",{ 
      opacity: 1,
      duration: 0.4,
      ease:"ease.InOut",
      scrollTrigger: {
        trigger: ".skcards",
        start: "top 80%",    
    }
    })
  })

  function SkillCard(){
    const skills = ["HTML", "CSS", "JAVASCRIPT", "NODE", "EXPRESS", "REACT", "GSAP", "GIT", "NEXT JS", "REDUX"];
    const hovcols = ['rgba(0,255,255', 'rgba(255,108,0', 'rgba(255,255,0', 'rgba(0,255,0', 'rgba(0,0,255', 'rgba(0,150,255', 'rgba(0,255,255', 'rgba(255,0,0', 'rgba(255,255,255', 'rgba(100,0,255'];
    return skills.map((item,index)=>{
      return <div key={item} className="flex flex-col justify-center items-center w-[9vw]  skcards gap-[8px]" style={{'--hovercolor': `${hovcols[index]},1)`, '--backcolor': `${hovcols[index]},0.1)`}}>
        <img className="clear-both w-[70%] aspect-square" src={`images/${item}_fill.png`} style={{filter: 'invert(1)'}} alt={item} />
        {item} 
      </div>
    })
  }

  return (<section>
    <h2 id="Skills" className="text-center" style={{'--ptop': '200px'}}>Skills</h2>
    <div className="flex justify-center flex-wrap gap-[50px]" style = {{  padding: '70px 16vw'}}>
      <SkillCard />
    </div>
    </section>
  );
}
