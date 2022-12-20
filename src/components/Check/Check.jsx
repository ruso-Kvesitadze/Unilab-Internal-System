import React from "react";
import { motion } from "framer-motion";

export const Check = ({ isChecked }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check"
    >
      <motion.path
        d="M4 12 9 17l 11-11"
        initial={{ pathLength: 0 }}
        animate={
          isChecked
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: 0, opacity: 0 }
        }
      />
    </svg>
  );
};
