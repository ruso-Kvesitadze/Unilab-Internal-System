import React from "react";
import { SButton } from "./Eye.styled";

export const Eye = ({ isPasswordVisible, onClick }) => {
  return (
    <SButton type="button" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-eye"
      >
        <mask id="myMask">
          <rect x="0" y="0" width="24" height="24" fill="white" stroke="none" />

          {isPasswordVisible && <path d="M 0 0 L 24 24" stroke="black" />}
        </mask>
        <path
          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
          mask="url(#myMask)"
        />
        <circle cx={12} cy={12} r={3} mask="url(#myMask)" />
        {isPasswordVisible && <path d="M 2 4 L 20 22" stroke="black" />}
      </svg>
    </SButton>
  );
};
