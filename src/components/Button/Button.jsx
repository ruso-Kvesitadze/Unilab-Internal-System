import React from "react";
import { SButton } from "./Button.styled";

export const Button = ({ type, secondary, onClick, children }) => {
  return (
    <SButton type={type} secondary={secondary} onClick={onClick}>
      {children}
    </SButton>
  );
};
