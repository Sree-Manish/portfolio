import React from "react";
import "./Projects.css";
import { projects } from "./ProjData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {

  useGSAP(()=>{
    gsap.from(".project-card",{
      y: 100,
      opacity: 0,
      duration: 0.6,
      scrollTrigger:{
        trigger: ".project-card",
        start: 'top 80%',
      }
    })
  },[])

  const ProjList = ()=>{
    return projects.map((project) => {
        return <div className="project-card" key={project.id}>
          <img
            src={project.image}
            alt={`${project.name} Thumbnail`}
            className="project-image"
          />
          <div className="project-content">
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.desc}</p>
          </div>
          <div className="text-center">
            <a href={project.link}>
              <button className="visit-site">Visit Site
              </button>
            </a>
          </div>
        </div>
    })
  };


  return <section id="Projects">
    <h2 className="Projects text-center" style={{'--ptop': '0px'}}>Projects</h2>
    <div className="project-card-container">
      <ProjList />
    </div>
  </section>;
}
