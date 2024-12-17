import React, { useRef, useState } from "react";
import Bars from "../../icons/Bars";
import ThreeDot from "../../icons/ThreeDot";

function QuestionListItem({questionDetail}) {
  // console.log("question detail",questionDetail)
  const baseStyles = "font-medium capitalize";
  const easyStyle = "text-green-primary";
  const medStyle = "text-yellow-primary";
  const hardStyle = "text-red-primary";

  const barIconRef = useRef();
  const threeDotIconRef = useRef();

  function handleOnEnter() {
    // console.log())
    barIconRef.current.style.visibility= "visible";
    threeDotIconRef.current.style.visibility= "visible";
  }
  function handleOnExit() {
    // console.log())
    barIconRef.current.style.visibility= "hidden";
    threeDotIconRef.current.style.visibility= "hidden";
  }

  return (
    <div  onMouseEnter={handleOnEnter}  onMouseLeave={handleOnExit} className="max-w-[700px] ">
      <div className="flex items-center transition-all ease-in duration-300 text-white-primary w-full justify-between px-4 py-1 hover:bg-black-light-2 cursor-pointer rounded-lg">
        <div className=" flex items-center  p-1 gap-3">
          <div ref={barIconRef} className="invisible"  >
            <Bars className="size-5 text-white-secondary" />
          </div>

          <p className="font-semibold ">
            {questionDetail.sn}. {questionDetail.questionText}
          </p>
        </div>
        <div className="flex items-center  p-1 gap-3">
          <div
            className={`${
              (questionDetail.level.toLowerCase() == "easy" && easyStyle) ||
              (questionDetail.level.toLowerCase() == "med" && medStyle) ||
              (questionDetail.level.toLowerCase() == "hard" && hardStyle) ||
              ""
            } ${baseStyles} mb-[3px]`}
          >
            {questionDetail.level}
          </div>
          <div ref={threeDotIconRef} className="invisible" >
            <ThreeDot className="size-6 text-white-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionListItem;
