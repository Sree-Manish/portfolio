import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
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
      speed={160}
      style={{
        fontSize: "1.5em",
        display: "inline-block",
        color: "var(--text-muted)",
      }}
      repeat={Infinity}
    />
  );
};

export default TypeWriter;