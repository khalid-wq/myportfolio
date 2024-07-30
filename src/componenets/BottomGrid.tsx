import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "/gsap.png";
import tailwind from "/tailwind.png";
import react from "/react_logo-512.webp";
import motionlogo from "/framer.png";
import nextjs from "/nextjs.png";
import vuejs from "/vuejs.png";
import docker from "/docker.png";
import nodejs from "/nodejs.png";
import javascript from "/JavaScript-logo.png";
import typescript from "/Typescript_logo_2020.svg.png";

const technologies: Tech[] = [
  { id: 0, name: "ReactJS", image: react },
  { id: 1, name: "NextJS", image: nextjs },
  { id: 2, name: "VueJS", image: vuejs },
  { id: 3, name: "TailwindCSS", image: tailwind },
  { id: 4, name: "Framer-Motion", image: motionlogo },
  { id: 5, name: "GSAP", image: gsap },
  { id: 6, name: "Docker", image: docker },
  { id: 7, name: "Nodejs", image: nodejs },
  { id: 8, name: "Javascript", image: javascript },
  { id: 9, name: "Typescript", image: typescript },
];
function BottomGrid() {
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 gap-3">
      <Contact />
      <Tech />
    </div>
  );
}
const Contact = () => {
  const [email, setEmail] = useState("");
  return (
    <div className=" bg-seconday border border-zinc-800 rounded-3xl md:p-10 p-5">
      <h2 className=" text-xl mb-10">
        Be the first to see our newly released components from Re-fragment!
      </h2>
      <div className=" flex justify-between gap-3">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Your Email ..."
          className=" outline-none bg-transparent ring-2 ring-zinc-700 p-3 rounded-2xl grow"
        />
        <button
          onClick={() => setEmail("")}
          className=" p-3 bg-primary rounded-2xl border-[2px] border-zinc-700"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};
const Tech = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const xTransition = useMotionValue(0);
  const containerWidth = containerRef?.current?.getBoundingClientRect().width;
  useEffect(() => {
    if (!containerWidth) return;

    const finalPosition = -containerWidth / 2 - 8;

    const controls = animate(xTransition, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTransition, containerWidth]);

  return (
    <div className="relative  md:p-10 p-5 bg-seconday border border-zinc-800 rounded-3xl flex flex-col gap-6 justify-between overflow-hidden">
      <h1 className="text-xl">Technologies that i use</h1>
      <div
        className="  h-[70px] 
        before:absolute before:left-0 before:content-[''] before:h-full before:w-[50px] before:bg-gradient-to-r before:from-seconday before:to-transparent before:z-10 
        after:absolute after:right-0 after:content-[''] after:h-full after:w-[50px] after:bg-gradient-to-l after:from-seconday after:to-transparent after:z-10 
"
      >
        {" "}
        <motion.div
          ref={containerRef}
          style={{ x: xTransition }}
          className="  h-[70px]  flex gap-2 absolute   
        "
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[70px] h-[70px] bg-zinc-800 rounded-2xl flex justify-center items-center"
            >
              <img src={tech.image} alt={tech.name} width={50} height={50} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default BottomGrid;
interface Tech {
  id: number;
  name: string;
  image: string;
}
