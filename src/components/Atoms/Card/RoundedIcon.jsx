import React, { useState } from "react";
import Code from "../../icons/Code";
import ToolTip from "./ToolTip";

function RoundedIcon({ icon, className = "", toolTipText  }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative inline-block "
    >
      <div className="bg-black-light hover:bg-black-secondary cursor-pointer rounded-full text-white-primary inline-block p-2">
        <div className="size-5 flex items-center justify-center">
          {icon}
        </div>
      </div>
      {isVisible && <ToolTip toolTipText={toolTipText} />}
    </div>
  );
}

export default RoundedIcon;
