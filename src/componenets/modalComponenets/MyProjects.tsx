import { useState } from "react";
import { DataProject, projectsData } from "../../tools/projectData";
import { Link } from "react-router-dom";
function MyProjects() {
  return (
    <div className="max-w-5xl mx-auto p-4 overflow-y-auto h-full ">
      <h2 className="font-[500] mb-5 text-neutral tracking-widest">Projects</h2>

      <div>
        <Others />
      </div>
    </div>
  );
}

const Others = () => {
  return (
    <div>
      <p>
        These projects reflect my learning path, starting from HTML and CSS,
        then moving to JavaScript and then to full-stack development with the
        MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). Now, I am focusing on
        building high-quality, interactive UI/UX components and learning complex
        animations using Next.js, TailwindCSS with TypeScript, and animation
        libraries like Framer Motion and GSAP.
      </p>
      <div className=" mt-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-4 justify-items-center">
        {projectsData.slice(0, 8).map((project) => (
          <CardProjects key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export const CardProjects = ({ title, image, content, slug }: DataProject) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className=" bg-primary rounded-xl p-2 border border-zinc-800">
      <div className="">
        {!loading && (
          <div className="  h-[200px] w-[300px]   rounded-3xl bg-seconday border-zinc-800 border flex justify-center items-center">
            Loading...
          </div>
        )}
        <img
          src={image[0]}
          alt={title}
          className="rounded-xl"
          onLoad={() => setLoading(true)}
        />
      </div>
      <div className="p-2 flex flex-col">
        <h2 className=" font-bold">{title}</h2>
        <span className=" italic">
          <p className=" text-neutral line-clamp-2  ">{content}</p>
        </span>
        <div className=" mt-4 self-end">
          <Link to={`/myportfolio/projects/${slug}`}>
            <div className="bg-seconday p-2 rounded-xl border border-zinc-800 ">
              Read more
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
