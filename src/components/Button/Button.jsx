import React from "react";
import { SButton } from "./Button.styled";

export const Button = ({
  type,
  secondary,
  width,
  margin,
  fontSize,
  fontWeight,
  onClick,
  children,
}) => {
  return (
    <SButton
      width={width}
      margin={margin}
      fontSize={fontSize}
      fontWeight={fontWeight}
      type={type}
      secondary={secondary}
      onClick={onClick}
    >
      {children}
    </SButton>
  );
};
