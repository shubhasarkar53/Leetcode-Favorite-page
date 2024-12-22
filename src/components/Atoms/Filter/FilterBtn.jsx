import React, { useContext, useEffect, useRef, useState } from "react";
import FilterIcon from "../../icons/Filter";
import Modal from "./Modal";
import CheckBox from "./CheckBox";
import Refresh from "../../icons/Refresh";
import { FilterContext } from "../../../contexts/filterContext";
import CrossIcon from "../../icons/CrossIcon";
function FilterBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const [filterArr, setFilterArr] = useContext(FilterContext);

  function handleModal() {
    setIsVisible((prev) => !prev);
  }

  function removeFilter(filterToBeRemoved) {
    setFilterArr((prevFilters) =>
      prevFilters.filter((filter) => filter !== filterToBeRemoved)
    );
  }

  const modalRef = useRef(null);
  useEffect(() => {
    function handleOutSideClick(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }

    if (isVisible) {
      document.addEventListener("mousedown", handleOutSideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [isVisible]);

  const btnWhiteBaseStyle = `flex gap-2  border border-[#ffffff25] ${
    filterArr.length !== 0
      ? " text-black-secondary font-medium bg-white-primary hover:bg-white-secondary"
      : "bg-black-secondary hover:bg-black-light-2 text-white-secondary"
  }`;

  return (
    <div>
      <div className="flex gap-2">
        <button
          onClick={handleModal}
          className={`${btnWhiteBaseStyle} py-1 px-3 rounded-xl items-center `}
        >
          <FilterIcon className="size-4" />
          <p className=" text-xs font-base">Filter</p>
        </button>
        <div className="flex gap-2">
          {filterArr.map((filter) => {
            return (
              <div
                key={filter}
                className={`${btnWhiteBaseStyle} text-xs font-base capitalize py-1 px-2  items-center  rounded-full`}
              >
                <div> {filter}</div>
                <button onClick={() => removeFilter(filter)}>
                  <CrossIcon className="size-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* modal */}
      <>
        {isVisible && (
          <div ref={modalRef} className="relative w-[33%]">
            <Modal className="top-3">
              <div className="flex flex-col gap-2 w-full">
                <div className="text-sm font-medium ">Difficulty</div>
                <ul className=" w-full h-full flex items-center justify-between flex-wrap gap-2">
                  {["easy", "medium", "hard"].map((item, index) => {
                    return (
                      <CheckBox on item={item} index={index} key={index} />
                    );
                  })}
                </ul>
                <button
                  onClick={() => setFilterArr([])}
                  className="my-3 px-4 py-2 bg-black-light-2 rounded-md cursor-pointer w-full flex items-center justify-center gap-2 text-sm font-medium text-white-primary hover:bg-[#3d3d3b]"
                >
                  {" "}
                  <Refresh className="size-5" /> Reset{" "}
                </button>
              </div>
            </Modal>
          </div>
        )}
      </>
    </div>
  );
}

export default FilterBtn;
