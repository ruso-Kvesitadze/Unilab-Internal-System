import React from "react";
import { SButton } from "./Button.styled";

export const Button = ({
  type,
  secondary,
  width,
  height,
  margin,
  fontSize,
  fontWeight,
  hover,
  onClick,
  children,
}) => {
  return (
    <SButton
      width={width}
      height={height}
      margin={margin}
      fontSize={fontSize}
      fontWeight={fontWeight}
      type={type}
      hover={hover}
      secondary={secondary}
      onClick={onClick}
    >
      {children}
    </SButton>
  );
};
