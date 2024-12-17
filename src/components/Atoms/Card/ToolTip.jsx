import React from "react";
import { motion } from "motion/react";

function ToolTip({toolTipText}) {

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1, transition: { duration: 0.1 } }}
      className="absolute py-2 px-3 text-xs -top-10 border-2 flex items-center justify-center  text-white-primary border-[#fafafa0e] rounded-lg bg-black-light w-[110%]"
    >
      {toolTipText}
    </motion.div>
  );
}

export default ToolTip;
