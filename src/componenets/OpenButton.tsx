import { Dispatch, SetStateAction } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function OpenButton({
  setOpenModal,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => setOpenModal((prev) => !prev)}
      className=" absolute bottom-5 right-5 bg-primary p-3 rounded-full border-gray-600 border group cursor-pointer"
    >
      <div className="group-hover:-rotate-90  transition-transform duration-300">
        <FaArrowRightLong />
      </div>
    </div>
  );
}

export default OpenButton;
