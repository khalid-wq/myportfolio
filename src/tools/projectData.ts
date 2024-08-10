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
import ref1 from "../../public/projects/1.png";
import ref2 from "../../public/projects/2.png";
export interface DataProject {
  id: number;
  title: string;
  status: string;
  image: string[];
  tools: string[];
  url: string;
  slug: string;
  github: string;
  tiktok: string;
  content: string[];
}
export const projectsData: DataProject[] = [
  {
    id: 0,
    status: "In-Progress",
    title: "University Tickiting system",
    slug: "University-Tickiting-system",
    image: [tickiting1, tickiting2],
    tools: [
      "nextjs",
      "docker",
      "prisma",
      "postgres",
      "next-auth",
      "nodejs",
      "tailwindcss",
      "typescript",
    ],
    content: [
      `This project originated from a friend's request, and we are both collaborating on it. The idea is to build
       a ticketing system or helpdesk for students at Qadi Ayyad University. This system will help handle student problems
        and technical issues. Any student can submit a ticket to a specific department and specify the problem type or describe
         the issue in detail. The application will have two secure layouts: one dashboard for students to submit tickets, and another
          dashboard for staff members to respond to these tickets.
        `,
      `We chose to use Next.js as a full-stack framework with PostgreSQL and Prisma, and a Node.js server to ensure scalability if
         the app grows. For authentication, we are using NextAuth with the Google provider because the university provides students
          with Google email accounts.
        `,
      `The app is currently in progress, and we are continuing to work on it from time to time.`,
    ],
    url: "undefined",
    github: "undefined",
    tiktok: "undefined",
  },
  {
    id: 1,
    status: "Completed",
    title: "RAWG platform clone",
    slug: "RAWG-platform-clone",
    image: [rawg],
    tools: ["nextjs", "tailwindcss", "api"],
    content: [
      `RAWG is a video game database and discovery service that offers information on a wide range of games, including reviews,
       ratings, and descriptions. Often described as the "IMDb for video games," RAWG provides detailed information about games across
        various platforms, including PC, consoles, and mobile devices. Users can explore game lists, find recommendations, track their
         game collection, and discover new titles. Additionally, RAWG offers APIs for developers to integrate game data into their own
          applications or websites.`,
      `With this project, I learned Tailwind CSS and CSS Grid. It helped me deepen my understanding of how Tailwind CSS works, providing
       rich content to experiment with using the RAWG API (https://api.rawg.io/docs/), and how to fetch data from it .`,
    ],
    github: "https://github.com/khalid-wq/rawg",
    url: "undefined",
    tiktok: "undefined",
  },
  {
    id: 2,
    status: "Completed-out-of-service",
    title: "Wallpapers Anime Gallary",
    slug: "Wallpapers-Anime-Gallary",
    image: [wallpaper1, wallpaper2, wallpaper3],
    tools: ["nextjs", "nodejs", "mongodb", "css", "aws"],
    content: [
      `This is one of my freelancing projects, where I created an anime wallpaper gallery for a TikTok creator and MVC editor. He wanted to share
       the photos he edited by posting them on his TikTok page while also making them available for users to download from his website.
      `,
      `For this application, I used Next.js as a front-end framework along with CSS and Material-UI, and Node.js for the backend with MongoDB
       and Express.js. AWS S3 was utilized for image storage, and JSON Web Tokens (JWT) were used for authentication. The application features a
        simple dashboard where the client can add wallpapers by posting images to AWS S3, retrieving the S3 URL, and editing, removing, or updating wallpapers."
       ,
      `,
      `The website reached up to 1,000+ users per week, but unfortunately, due to the high-quality images, the AWS bill became too expensive for
       the client to pay. As a result, the website is now out of service. `,
    ],
    github: "undefined",
    url: "https://www.turanks.com/",
    tiktok: "https://www.tiktok.com/@turanks_",
  },
  {
    id: 3,
    status: "Completed-internship",
    title: "Yaml editor with AWS S3",
    slug: "Yaml-editor-with-AWS-S3",
    image: [yamleditor],
    tools: ["reactjs", "aws", "tailwindcss", "docker"],
    content: [
      `This is an internship project that features a React-Ace editor for displaying and editing YAML files. The files can then be uploaded to an AWS S3 bucket for use by the team.
      `,
      `I used ReactJS and TailwindCSS to build this project, which helps my team find and reuse our YAML codes.`,
    ],
    github: "undefined",
    url: "undefined",
    tiktok: "undefined",
  },
  {
    id: 4,
    status: "Completed-internship",
    title: "Internship workshop",
    slug: "Internship-workshop",
    image: [workshop1, workshop2, workshop3, workshop4],
    tools: ["reactjs", "tailwindcss", "aws", "docker", "Kubernetes"],
    content: [
      `This was one of the great projects where I learned a lot about AWS, dockerizing applications, using Kubernetes, and CI/CD integration. We worked with pipelines using GitHub
       Actions and AWS CodePipeline, along with ECR and EKS. The project was packed with information, allowing us to practice with top AWS services.
      `,
      `For this application, we were a team of five interns. I was responsible for developing the dashboard and the navbar. I used Recharts to display dynamic data in the form of charts
       and Styled Components for styling the navbar.
      `,
    ],
    github: "undefined",
    url: "undefined",
    tiktok: "undefined",
  },
  {
    id: 5,
    status: "Completed",
    title: "Youtube clone",
    slug: "Youtube-clone",
    image: [youtube],
    tools: ["reactjs", "css", "api"],

    content: [
      "YouTube clone application using React JS and Material UI 5, Integrating the application with Rapid API to retrieve video data.",
    ],
    github: "https://github.com/khalid-wq/youtube-clone",
    url: "https://github.com/khalid-wq/youtube-clone",
    tiktok: "undefined",
  },
  {
    id: 6,
    status: "Completed",
    title: "CRUD system with javascript",
    slug: "CRUD-system-with-javascript",
    image: [crud],
    tools: ["html", "css", "javascript"],
    content: [
      "Full product management system crud with javascript,to Create data, Read and display that data, Data modification and updating, delete data and Find data.",
    ],
    github: "undefined",
    url: "undefined",
    tiktok: "undefined",
  },
  {
    id: 7,
    status: "Completed",
    title: "HTML & CSS Landing Page",
    slug: "HTML&CSS-Landing-Page",
    image: [simple],
    tools: ["html", "css"],
    content: [
      " A sample portfolio using HTML and more advanced CSS to make it dynamique.",
    ],
    github: "undefined",
    url: "undefined",
    tiktok: "undefined",
  },
  {
    id: 8,
    status: "In-Progress",
    title: "Re-fragment",
    slug: "re-fragment",
    image: [ref1, ref2],
    tools: [
      "nextjs",
      "tailwindcss",
      "framer-motion",
      "next-auth",
      "typescript",
    ],
    content: [
      `Re-fragement is a platform that provides a collection of prebuilt UI components and templates, designed to streamline the development
       of websites and applications. These resources are specifically tailored for use with React, TailwindCSS, and often integrate
        with animation libraries like Framer Motion
        `,
      `The components available on Re-fragement cover a wide range of UI needs, including navigation bars, buttons, carousels, dropdown menus,
       modals, and more. They are designed to enhance the visual appeal and interactivity of web projects, making it easy to implement polished,
        professional-looking features without having to build them from scratch.
        `,
      `For developers looking to expedite their development process, Re-fragement  also offers a selection of complete templates. These templates,
       which include styles like Clean Neubrutalism and Steam Dev Portfolio, are built on top of Next.js and styled with TailwindCSS, offering
        both aesthetic appeal and functional design. This makes it easier to launch projects with a consistent and modern look`,
    ],
    url: "https://re-fragment.vercel.app/",
    tiktok: "undefined",
    github: "undefined",
  },
];
