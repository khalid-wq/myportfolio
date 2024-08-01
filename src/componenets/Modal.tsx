import { motion, useDragControls } from "framer-motion";
import { RiDraggable } from "react-icons/ri";
import { useModal } from "../hooks/useModal";
const modalVariants = {
  show: {
    scaleY: 1,
    transition: { ease: "easeInOut" },
  },
  hide: {
    scaleY: 0,
    transition: { ease: "easeInOut", delay: 0.5 },
  },
};
const contentVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
  hide: {
    opacity: 0,
    y: 15,
  },
};
function Modal({ children }: { children: React.ReactNode }) {
  const controls = useDragControls();
  const { closeModal } = useModal();
  return (
    <div className=" fixed z-50 w-full h-screen">
      <div
        onClick={closeModal}
        className="w-full h-screen backdrop-blur-sm fixed left-0 top-0 z-40 rounded-t-3xl  "
      ></div>
      <motion.div
        drag="y"
        onClick={(e) => e.stopPropagation()}
        onDragEnd={(_event, info) => {
          if (info.offset.y > 300) {
            closeModal();
          }
        }}
        variants={modalVariants}
        animate="show"
        initial="hide"
        exit="hide"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.5 }}
        dragListener={false}
        dragControls={controls}
        className="w-full h-[85%] bg-seconday  fixed left-0  bottom-0 z-50 rounded-t-3xl origin-bottom "
      >
        <div className="border-b border-zinc-800 flex justify-center items-center sticky top-0 left-0 right-0 bg-seconday">
          <button
            onPointerDown={(e) => {
              controls.start(e);
            }}
            className=" cursor-grab active:cursor-grabbing touch-none"
          >
            <RiDraggable size={30} className=" rotate-90 text-zinc-500 " />
          </button>
        </div>
        {/* contetnt */}
        <motion.div
          variants={contentVariants}
          animate="show"
          initial="hide"
          exit="hide"
          className=" overflow-y-auto h-full pb-[50px]"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Modal;
