import { useParams } from "react-router-dom";
import { DataProject, projectsData } from "../tools/projectData";
import gsap from "/gsap.png";
// import tailwind from "/tailwind.png";
// import react from "/react_logo-512.webp";
// import motionlogo from "/framer.png";
// import nextjs from "/nextjs.png";
// import vuejs from "/vuejs.png";
// import docker from "/docker.png";
// import nodejs from "/nodejs.png";
// import javascript from "/JavaScript-logo.png";
// import typescript from "/Typescript_logo_2020.svg.png";
// import prisma from "../../public/prisma.png";
// import nextauth from "../../public/logo-sm.png";
// import postgres from "../../public/postgres.png";
import Footer from "../componenets/Footer";
import { IconType } from "react-icons";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa6";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";
import {
  SiAuth0,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

interface types {
  id: number;
  name: string;
  image: IconType | string;
}
const icons: types[] = [
  { id: 0, name: "ReactJS", image: FaReact },
  { id: 1, name: "NextJS", image: RiNextjsLine },
  { id: 2, name: "VueJS", image: FaVuejs },
  { id: 3, name: "TailwindCSS", image: RiTailwindCssLine },
  { id: 4, name: "Framer-Motion", image: TbBrandFramerMotion },
  { id: 5, name: "GSAP", image: gsap },
  { id: 6, name: "Docker", image: FaDocker },
  { id: 7, name: "Nodejs", image: FaNodeJs },
  { id: 8, name: "Javascript", image: SiJavascript },
  { id: 9, name: "Typescript", image: SiTypescript },
  { id: 10, name: "Prisma", image: SiPrisma },
  { id: 11, name: "next-auth", image: SiAuth0 },
  { id: 12, name: "postgres", image: BiLogoPostgresql },
  { id: 13, name: "api", image: TbApi },
  { id: 14, name: "css", image: FaCss3Alt },
  { id: 15, name: "aws", image: FaAws },
  { id: 16, name: "mongoDB", image: SiMongodb },
  { id: 17, name: "Kubernetes", image: SiKubernetes },
  { id: 18, name: "html", image: FaHtml5 },
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
        <div className=" flex mb-4 gap-2">
          <h1 className=" text-2xl font-black ">{project?.title}</h1>
          <span className=" self-end">({project?.status})</span>
        </div>
        <div className=" flex gap-2 mb-10">
          {project?.tools.map((tool) => {
            const icon = icons.find(
              (image) => image.name.toLowerCase() === tool.toLocaleLowerCase()
            );
            return icon ? (
              <i key={icon.id}>{<icon.image size={25} />}</i>
            ) : (
              <span key={tool}>{tool}</span>
            );
          })}
        </div>
        <div className=" text-neutral flex flex-col gap-5">
          {project?.content.map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </div>
        {project && (
          <>
            <Images project={project} />
            <Buttons project={project} />
          </>
        )}
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
    <div
      className="py-10 flex overflow-x-auto gap-2 no-scrollbar scroll-smooth "
      style={{
        scrollSnapType: "x mandatory",
      }}
    >
      {project.image.map((img, index) => (
        <img
          style={{
            scrollSnapAlign: "center",
          }}
          key={index}
          src={img}
          alt={project.title}
          className="mb-4 rounded-2xl"
        />
      ))}
    </div>
  );
};
const Buttons: React.FC<ImagesProps> = ({ project }) => {
  return (
    <div className=" py-10 clear-start flex gap-3 justify-end">
      {project.url !== "undefined" && (
        <button className="bg-slate-800 p-2 rounded-xl">
          <a href={project.url}>Check website</a>{" "}
        </button>
      )}
      {project.github !== "undefined" && (
        <button className="bg-slate-800 p-2 rounded-xl">
          <a href={project.github}>Github Repo</a>{" "}
        </button>
      )}
    </div>
  );
};
export default Projects;
