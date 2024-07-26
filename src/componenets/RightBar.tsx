import { AiOutlineDiscord } from "react-icons/ai";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaDribbble, FaGithub } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import OpenButton from "./OpenButton";
import { BiCopy } from "react-icons/bi";
import { Dispatch, SetStateAction } from "react";

function RightBar({
  setOpenModal,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className=" grid grid-cols-1 gap-3">
      <Socials />
      <Projects setOpenModal={setOpenModal} />
      <div className=" bg-seconday  h-[200px] rounded-3xl p-4 "></div>
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
const Projects = ({
  setOpenModal,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className=" bg-seconday border border-zinc-800 rounded-3xl p-5 relative">
      <OpenButton setOpenModal={setOpenModal} />
      <h1 className="  font-[200] mb-5 text-neutral tracking-widest">
        PROJECTS
      </h1>
      <p className="text-white text-xl pb-10">
        Here you can find a bunch of portfolio projects that I made. You can
        choose and see more examples of my last projects.
      </p>
    </div>
  );
};
const Email = () => {
  return (
    <div className=" bg-seconday border border-zinc-800 rounded-3xl p-5 relative flex justify-center items-center flex-col">
      <p className="text-white text-xl mb-4 ">have a project in Minde?</p>
      <button className=" bg-zinc-800 flex justify-center items-center p-3 rounded-xl gap-3">
        copie email <BiCopy />
      </button>
    </div>
  );
};
export default RightBar;
