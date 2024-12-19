import React, { useContext } from "react";
import FoldIcon from "../../icons/FoldIcon";
import { SideBarVisibleContext } from "../../../contexts/sideBarVisibleContext";

function FoldBtn({ className = "" }) {
  const [isVisible, setIsVisible] = useContext(SideBarVisibleContext);

  return (
    <button
      className={`${className} p-2 rounded-md text-white-primary bg-transparent border border-[#f5f4f431] hover:bg-black-extra-light`}
      onClick={() => setIsVisible((prev) => !prev)}
    >
      <FoldIcon className="size-4" />
    </button>
  );
}

export default FoldBtn;
