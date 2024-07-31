import project1 from "../../public/1.png";
import project2 from "../../public/2.png";
import { Link } from "react-router-dom";
// import project3 from "/featured-clementine.jpg";
function Projects() {
  return (
    <div className=" grid grid-cols-2 gap-3 ">
      <Project image={project2} />
      <Project image={project1} />
    </div>
  );
}
const Project = ({ image }: { image: string }) => {
  return (
    <Link to="/myportfolio/projects/re-fragment">
      {" "}
      <div className="  h-[260px] overflow-hidden rounded-3xl relative cursor-pointer">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </Link>
  );
};
export default Projects;
