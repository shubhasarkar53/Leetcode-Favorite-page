import React from "react";
import { motion } from "motion/react";

function Modal({ children,className }) {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1, transition: { duration: 0.1 } }}
      className={`${className} absolute py-3 px-4 text-xs  border-2 flex items-center justify-center  text-white-primary border-[#fafafa0e] rounded-lg bg-black-light w-[110%]`}
    > 
      {children}
    </motion.div>
  );
}

export default Modal;
