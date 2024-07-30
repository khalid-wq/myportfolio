import Aboutme from "../componenets/Aboutme";
import BottomGrid from "../componenets/BottomGrid";
import Modal from "../componenets/Modal";
import MoreAboutMe from "../componenets/MoreAboutMe";
import Projects from "../componenets/Projects";
import RightBar from "../componenets/RightBar";
import { AnimatePresence } from "framer-motion";
import { useModal } from "../hooks/useModal";
import Footer from "../componenets/Footer";

function Home() {
  const { isModalOpen, modalContent } = useModal();
  isModalOpen
    ? document.body.classList.add("no-scroll")
    : document.body.classList.remove("no-scroll");
  return (
    <div className=" flex flex-col justify-between  items-center ">
      <div className=" p-2 grid lg:grid-cols-[1fr,300px] gap-3 max-w-7xl  py-[4rem] ">
        <AnimatePresence>
          {isModalOpen && <Modal>{modalContent}</Modal>}
        </AnimatePresence>

        <div className=" grid grid-cols-1 gap-3 ">
          <Aboutme />
          <div className=" grid md:grid-cols-2 grid-cols-1 gap-3 ">
            <MoreAboutMe />
            <Projects />
          </div>
          <BottomGrid />
        </div>

        <div>
          <RightBar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
