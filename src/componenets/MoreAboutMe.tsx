import { Dispatch, SetStateAction } from "react";
import OpenButton from "./OpenButton";

export default function MoreAboutMe({
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className=" bg-seconday border border-zinc-800 rounded-3xl p-5 relative">
      <OpenButton setOpenModal={setOpenModal} />
      <h1 className="  font-[200] mb-5 text-neutral tracking-widest">ABOUT</h1>
      <p className="text-white text-xl">
        Passionate about animating UI components and using CSS and TailwindCSS
        with Framer-Motion Or GSAP.
      </p>
    </div>
  );
}
