import React, { useState } from "react";
import Avatar from "../../assets/images/avatar.png";
import Logo from "../icons/Logo";
import Bell from "../icons/Bell";
import Fire from "../icons/Fire";
import Container from "../LayoutHelpers/Container";
function Navbar() {
  const [focusStatus, setFocusStatus] = useState(1);

  const navItems = [
    "Explore",
    "Problems",
    "Contest",
    "Discuss",
    "Interview",
    "Store",
  ];

  return (
    <header className="bg-black-bg-nav border-b-2 border-[#fafafa13]">
      <Container>
      <nav className=" flex items-center justify-between  text-white-primary ">
        <div className="flex items-center gap-3  ">
          <div className="h-[30px] w-[30px] flex justify-center items-center ">
            <Logo className="size-5" />
          </div>
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li
                className={`cursor-pointer leading-[50px]  transition-all duration-100 ease-in  ${
                  item == "Store"
                    ? "text-yellow-primary"
                    : "text-[#ffffffa5] hover:text-[#ffff]"
                } ${
                  focusStatus == index
                    ? `font-semibold text-white border-b-[3px] rounded-sm ${item=="Store"?"border-yellow-primary":"border-white"}`
                    : ""
                }`}
                key={index}
                onClick={() => setFocusStatus(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center  gap-4">
          <Bell className="size-6 text-[#ffffffa5] hover:text-[#ffff]" />
          <Fire className="  size-6 text-[#ffffffa5] hover:text-[#ffff]" />
          <div className="flex gap-2 items-center">
            <div className="w-[30px] aspect-square overflow-hidden rounded-full bg-white-secondary">
              <img src={Avatar} alt="avatar" />
            </div>
            <button className="px-3 py-1 font-Ubuntu text-sm bg-[#ff9e1720] rounded-md text-yellow-primary ">Premimum</button>
          </div>
        </div>
      </nav>
      </Container>
    
    </header>
  );
}

export default Navbar;
