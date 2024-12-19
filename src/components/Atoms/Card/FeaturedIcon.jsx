import React from "react";

function FeaturedIcon({ icon, className = "", size = "md" }) {
  const sizeStyles = {
    lg: "w-[80px] h-[80px]",
    md: "w-[40px] h-[40px]",
    sm: "w-[25px] h-[25px]",
  };

  return (
    <div
      className={`${sizeStyles[size]} bg-white-primary rounded-md flex items-center justify-center ${className}`}
    >
      <div className="w-[70%] h-[70%] flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

export default FeaturedIcon;
