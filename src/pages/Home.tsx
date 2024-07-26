import { useState } from "react";
import Aboutme from "../componenets/Aboutme";
import BottomGrid from "../componenets/BottomGrid";
import Modal from "../componenets/Modal";
import MoreAboutMe from "../componenets/MoreAboutMe";
import Projects from "../componenets/Projects";
import RightBar from "../componenets/RightBar";
import { AnimatePresence } from "framer-motion";

function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className=" p-2 grid lg:grid-cols-[1fr,300px] gap-3 max-w-7xl mx-auto  py-[4rem]">
      <AnimatePresence>
        {openModal && <Modal setOpenModal={setOpenModal} />}
      </AnimatePresence>

      <div className=" grid grid-cols-1 gap-3">
        <Aboutme />
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-3 ">
          <MoreAboutMe openModal={openModal} setOpenModal={setOpenModal} />
          <Projects />
        </div>
        <BottomGrid />
      </div>

      <div>
        <RightBar setOpenModal={setOpenModal} />
      </div>
    </div>
  );
}

export default Home;
