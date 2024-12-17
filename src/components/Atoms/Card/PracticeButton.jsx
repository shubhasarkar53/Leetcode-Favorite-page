import React, { useState } from "react";
import Play from "../../icons/Play";
import ToolTip from "./ToolTip";

function PracticeButton({ toolTipQuestion, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);

  const baseStyles =
    "py-2 px-4 flex items-center gap-2 font-medium bg-white-primary text-black-secondary rounded-full hover:bg-white-secondary";

  return (
    <div className="relative inline-block ">
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        title={toolTipQuestion}
        className={`${baseStyles} ${className}`}
      >
        <div>
          <Play className="size-4" />
        </div>
        Practice
      </button>

      {isVisible && (
        <ToolTip toolTipText={toolTipQuestion}  />
      )}
    </div>
  );
}

export default PracticeButton;
