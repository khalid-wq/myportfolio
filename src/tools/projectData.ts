import tickiting1 from "../../public/projects/ticketing-system.png";
import tickiting2 from "../../public/projects/tickiting-submit.png";
import rawg from "../../public/projects/rawg.png";
import wallpaper1 from "../../public/projects/wallpaper-app.png";
import wallpaper2 from "../../public/projects/login-wallpaper.png";
import wallpaper3 from "../../public/projects/wllpaper-add.png";
import yamleditor from "../../public/projects/yaml-editor.png";
import workshop1 from "../../public/projects/workshop1.png";
import workshop2 from "../../public/projects/workshop2.png";
import workshop3 from "../../public/projects/workshop3.png";
import workshop4 from "../../public/projects/workshop4.png";
import youtube from "../../public/projects/youtube.png";
import crud from "../../public/projects/crud.png";
import simple from "../../public/projects/simple.png";
export interface DataProject {
  id: number;
  title: string;
  image: string[];
  tools: string[];
  url: string;
  slug: string;
  content: string;
}
export const projectsData: DataProject[] = [
  {
    id: 0,
    title: "University Tickiting system",
    slug: "University-Tickiting-system",
    image: [tickiting1, tickiting2],
    tools: ["nextjs", "docker"],
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quos.",
    url: "https://portfolio-wq.github.io/pink-1/",
  },
  {
    id: 1,
    title: "RAWG platform clone",
    slug: "RAWG-platform-clone",
    image: [rawg],
    tools: ["nextjs", "docker"],
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quos.",
    url: "https://portfolio-wq.github.io/pink-1/",
  },
  {
    id: 2,
    title: "Wallpapers Anime Gallary",
    slug: "Wallpapers-Anime-Gallary",
    image: [wallpaper1, wallpaper2, wallpaper3],
    tools: ["nextjs", "docker"],
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quos.",
    url: "https://portfolio-wq.github.io/pink-1/",
  },
  {
    id: 3,
    title: "Yaml editor with AWS S3",
    slug: "Yaml-editor-with-AWS-S3",
    image: [yamleditor],
    tools: ["nextjs", "docker"],
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quos.",
    url: "https://portfolio-wq.github.io/pink-1/",
  },
  {
    id: 4,
    title: "Internship workshop",
    slug: "Internship-workshop",
    image: [workshop1, workshop2, workshop3, workshop4],
    tools: ["nextjs", "docker"],
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quos.",
    url: "https://portfolio-wq.github.io/pink-1/",
  },
  {
    id: 5,
    title: "Youtube clone",
    slug: "Youtube-clone",
    image: [youtube],
    tools: ["nextjs", "docker"],
    content:
      "YouTube clone application using React JS and Material UI 5, Integrating the application with Rapid API to retrieve video data.",
    url: "https://portfolio-wq.github.io/pink-1/",
  },
  {
    id: 6,
    title: "CRUD system with javascript",
    slug: "CRUD-system-with-javascript",
    image: [crud],
    tools: ["nextjs", "docker"],
    content:
      "Full product management system crud with javascript,to Create data, Read and display that data, Data modification and updating, delete data and Find data.",
    url: "https://portfolio-wq.github.io/pink-1/",
  },
  {
    id: 7,
    title: "HTML & CSS Landing Page",
    slug: "HTML&CSS-Landing-Page",
    image: [simple],
    tools: ["nextjs", "docker"],
    content:
      "A sample portfolio using HTML and more advanced CSS to make it dynamique.",
    url: "https://portfolio-wq.github.io/pink-1/",
  },
];
