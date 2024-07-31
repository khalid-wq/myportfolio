import { AiOutlineDiscord } from "react-icons/ai";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaDribbble, FaGithub } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import OpenButton from "./OpenButton";
import { BiCopy } from "react-icons/bi";
import MyProjects from "./modalComponenets/MyProjects";
import { useModal } from "../hooks/useModal";
import MyPortfolios from "./modalComponenets/MyPortfolios";
import toast from "react-hot-toast";

function RightBar() {
  const { openModal } = useModal();

  const openProjectsModal = () => {
    openModal(<MyProjects />);
  };
  const openPortfoliosModal = () => {
    openModal(<MyPortfolios />);
  };
  return (
    <div className=" grid grid-cols-1 gap-3">
      <Socials />
      <Projects whichModal={openPortfoliosModal} />
      <Portfolios whichModal={openProjectsModal} />
      <Email />
    </div>
  );
}
const Socials = () => {
  return (
    <div className=" grid grid-cols-3 gap-3">
      <div className="bg-seconday p-4 rounded-3xl border border-zinc-800 flex justify-center items-center cursor-pointer">
        <CiLinkedin size={30} />
      </div>

      <div className="bg-seconday p-4 rounded-3xl border border-zinc-800 flex justify-center items-center cursor-pointer">
        <CiFacebook size={30} />
      </div>
      <div className="bg-seconday p-4 rounded-3xl border border-zinc-800 flex justify-center items-center cursor-pointer ">
        <FaGithub size={30} />
      </div>
      <div className="bg-seconday p-4 rounded-3xl border border-zinc-800 flex justify-center items-center cursor-pointer">
        <AiOutlineDiscord size={30} />
      </div>
      <div className="bg-seconday p-4 rounded-3xl border border-zinc-800 flex justify-center items-center cursor-pointer">
        <FaDribbble size={30} />
      </div>
      <div className="bg-seconday p-4 rounded-3xl border border-zinc-800 flex justify-center items-center cursor-pointer">
        <TfiEmail size={30} />
      </div>
    </div>
  );
};
const Projects = ({ whichModal }: { whichModal: () => void }) => {
  return (
    <div className=" bg-seconday border border-zinc-800 rounded-3xl p-5 relative">
      <OpenButton whichModal={whichModal} />
      <h1 className="  font-[200] mb-5 text-neutral tracking-widest">
        PORTFOLIOS
      </h1>
      <p className="text-white text-xl pb-10">
        Here you can find a bunch of portfolio projects that I made. You can
        choose and see more examples .
      </p>
    </div>
  );
};
const Email = () => {
  const handleEmilCopied = () => {
    const email = "khalidsmail50@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => toast.success("email copied"))
      .catch(() => toast.error("somthing went wroon"));
  };
  return (
    <div className=" bg-seconday border border-zinc-800 rounded-3xl p-5 relative flex justify-center items-center flex-col">
      <p className="text-white text-xl mb-4 ">have a project in Minde?</p>
      <button
        onClick={() => handleEmilCopied()}
        className=" bg-zinc-800 flex justify-center items-center p-3 rounded-xl gap-3"
      >
        copie email <BiCopy />
      </button>
    </div>
  );
};
const Portfolios = ({ whichModal }: { whichModal: () => void }) => {
  return (
    <div className=" bg-seconday border border-zinc-800 rounded-3xl p-5 relative">
      <OpenButton whichModal={whichModal} />
      <h1 className="  font-[200] mb-5 text-neutral tracking-widest">
        PROJECTS
      </h1>
      <p className="text-white text-xl pb-10">
        Here are some of the top projects I've created and my journey of how I
        started learning.
      </p>
    </div>
  );
};
export default RightBar;
