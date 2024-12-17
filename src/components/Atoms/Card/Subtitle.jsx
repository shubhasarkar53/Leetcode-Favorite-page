import React from "react";

function Subtitle({ text = "", className = "", children }) {
  return (
    <div className={`text-sm text-white-primary ${className}`}>
      {text == "" ? children : text}
    </div>
  );
}

export default Subtitle;
