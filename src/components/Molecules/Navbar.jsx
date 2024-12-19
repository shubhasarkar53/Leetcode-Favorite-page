import React, { useState } from "react";
import Avatar from "../../assets/images/avatar.png";
import Logo from "../icons/Logo";
import Bell from "../icons/Bell";
import Fire from "../icons/Fire";
import Container from "../LayoutHelpers/Container";
import Bars from "../icons/Bars";
import CrossIcon from "../icons/CrossIcon";
import { motion } from "motion/react";
function Navbar() {
  const [focusStatus, setFocusStatus] = useState(1);
  const [navOpen, setNavOpen] = useState(false);

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
            {/* desktop */}
            <ul className="items-center gap-6 hidden md:flex ">
              {navItems.map((item, index) => (
                <li
                  className={`cursor-pointer leading-[50px]  transition-all duration-100 ease-in  ${
                    item == "Store"
                      ? "text-yellow-primary"
                      : "text-[#ffffffa5] hover:text-[#ffff]"
                  } ${
                    focusStatus == index
                      ? `font-semibold text-white border-b-[3px] rounded-sm ${
                          item == "Store"
                            ? "border-yellow-primary"
                            : "border-white"
                        }`
                      : ""
                  }`}
                  key={index}
                  onClick={() => setFocusStatus(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
            {/* mobile */}
            {navOpen && (
              <motion.ul
                initial={{ scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="absolute bg-black-tersiary inset-0 z-20 p-4 md:hidden"
              >
                <div className=" flex justify-end items-center">
                  <button onClick={() => setNavOpen(false)}>
                    <CrossIcon className="size-6" />
                  </button>
                </div>
                {navItems.map((item, index) => (
                  <li
                    className={`cursor-pointer leading-[50px]  transition-all duration-100 ease-in  ${
                      item == "Store"
                        ? "text-yellow-primary"
                        : "text-[#ffffffa5] hover:text-[#ffff]"
                    } ${
                      focusStatus == index
                        ? `font-semibold text-white border-b-[3px] rounded-sm ${
                            item == "Store"
                              ? "border-yellow-primary"
                              : "border-white"
                          }`
                        : ""
                    }`}
                    key={index}
                    onClick={() => setFocusStatus(index)}
                  >
                    {item}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
          <div className="flex items-center  gap-4">
            <div className="hidden  md:flex md:items-center  md:gap-4 ">
              <Bell className="size-6 text-[#ffffffa5] hover:text-[#ffff]" />
              <Fire className="  size-6 text-[#ffffffa5] hover:text-[#ffff]" />
              <div className="flex gap-2 items-center">
                <div className="w-[30px] aspect-square overflow-hidden rounded-full bg-white-secondary">
                  <img src={Avatar} alt="avatar" />
                </div>
                <button className="px-3 py-1 hidden md:inline-block font-Ubuntu text-sm bg-[#ff9e1720] rounded-md text-yellow-primary ">
                  Premimum
                </button>
              </div>
            </div>
            <button onClick={() => setNavOpen(true)}>
              <Bars className=" md:hidden size-5  text-white" />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
