import { motion } from "framer-motion";
import { RiDraggable } from "react-icons/ri";
import { useModal } from "../hooks/useModal";

function Modal({ children }: { children: React.ReactNode }) {
  const { closeModal } = useModal();
  return (
    <div className=" fixed z-50 w-full h-screen">
      <div
        onClick={closeModal}
        className="w-full h-screen backdrop-blur-sm fixed left-0 top-0 z-40 rounded-t-3xl  "
      ></div>
      <motion.div
        drag="y"
        dragSnapToOrigin
        animate={{ scaleY: 1 }}
        initial={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="w-full h-[85%] bg-seconday fixed left-0 bottom-0 z-50 rounded-t-3xl origin-bottom overflow-y-auto no-scrollbar "
      >
        <div className="border-b border-zinc-800 flex justify-center items-center sticky top-0 bg-seconday">
          <div
            onClick={closeModal}
            className=" cursor-grab focus:cursor-grabbing"
          >
            <RiDraggable size={30} className=" rotate-90 text-zinc-500 " />
          </div>
        </div>
        {/* contetnt */}
        {children}
      </motion.div>
    </div>
  );
}

export default Modal;
