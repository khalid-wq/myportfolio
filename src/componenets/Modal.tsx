import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { RiDraggable } from "react-icons/ri";

function Modal({
  setOpenModal,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => setOpenModal(false)}
      className="w-full h-screen backdrop-blur-sm fixed left-0 top-0 z-40 rounded-t-3xl  "
    >
      <motion.div
        drag="y"
        animate={{ scaleY: 1 }}
        initial={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="w-full h-[85%] bg-seconday fixed left-0 bottom-0 z-50 rounded-t-3xl origin-bottom "
      >
        <div className="border-b border-zinc-700 flex justify-center items-center">
          <div
            onClick={() => setOpenModal(false)}
            className=" cursor-grab focus:cursor-grabbing"
          >
            <RiDraggable size={30} className=" rotate-90 text-zinc-500 " />
          </div>
        </div>
        {/* contetnt */}
        <Content />
      </motion.div>
    </div>
  );
}
const Content = () => {
  return <div className="max-w-7xl mx-auto p-4">hello</div>;
};
export default Modal;
