import { TypeAnimation } from "react-type-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TypeWriter = () => {

  useGSAP(()=>{
    gsap.fromTo(".TypeWriting",{
      opacity: 0
    },{
      opacity: 1,
      duration: 2,
      delay: 2
    })
  },[])

  return (
    <TypeAnimation
      sequence={[
        "Full-Stack Developer",
        1200, 
        "Frontend Developer",
        1200,
        "Backend Developer",
        1200,
      ]}
      wrapper="div"
      speed={200}
      style={{
        fontSize: "1.5em",
        display: "inline-block",
        color: "#00ffff",
      }}
      repeat={Infinity}
      className = "TypeWriting"
    />
  );
};

export default TypeWriter;