import project1 from "/featu.webp";
import project2 from "/featured-proj-franz.jpg";
// import project3 from "/featured-clementine.jpg";
function Projects() {
  return (
    <div className=" grid grid-cols-2 gap-3">
      <Project image={project1} />
      <Project image={project2} />
    </div>
  );
}
const Project = ({ image }: { image: string }) => {
  return (
    <div
      className="  h-[250px] overflow-hidden rounded-3xl relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
  );
};
export default Projects;
