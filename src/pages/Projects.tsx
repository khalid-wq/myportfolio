import { useParams } from "react-router-dom";
import { DataProject, projectsData } from "../tools/projectData";
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
import Footer from "../componenets/Footer";
const icons = [
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
function Projects() {
  const { slug } = useParams();
  const project = projectsData.find((project) => project.slug === slug);
  if (slug) {
    document.body.classList.remove("no-scroll");
  }
  return (
    <div className="">
      <div className="max-w-6xl mx-auto py-[4rem] p-4">
        {" "}
        <div className=" flex mb-4 gap-2">
          <h1 className=" text-2xl font-black ">{project?.title}</h1>
          <span className=" self-end">(internship)</span>
        </div>
        <div className=" flex gap-1 mb-10">
          {project?.tools.map((tool) => {
            const icon = icons.find(
              (image) => image.name.toLowerCase() === tool.toLocaleLowerCase()
            );
            return icon ? (
              <img src={icon.image} width={30} height={30} key={icon.id} />
            ) : (
              <span key={tool}>{tool}</span>
            );
          })}
        </div>
        <div className=" text-neutral">{project?.content}</div>
        {project && <Images project={project} />}
        <Buttons />
      </div>

      <Footer />
    </div>
  );
}
interface ImagesProps {
  project: DataProject;
}

const Images: React.FC<ImagesProps> = ({ project }) => {
  return (
    <div className="py-10 flex overflow-x-auto gap-2 no-scrollbar ">
      {project.image.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={project.title}
          className="mb-4 rounded-2xl"
        />
      ))}
    </div>
  );
};
const Buttons = () => {
  return (
    <div className=" py-10 clear-start flex gap-3 justify-end">
      <button className="bg-slate-800 p-2 rounded-xl">Live Preview</button>

      <button className="bg-slate-800 p-2 rounded-xl">Github Repo</button>
    </div>
  );
};
export default Projects;
