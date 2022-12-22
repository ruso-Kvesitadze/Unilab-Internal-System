import React from "react";
import { SHeaderIcons } from "./HeaderIcons.styled";

export const HeaderIcons = ({ width, height }) => {
  return (
    <SHeaderIcons width={width} height={height}>
      <img src="./public/assets/svg/unilab.svg" alt="unilab" />
      <img src="./public/assets/png/iliaUniLogo.png" alt="iliaUniLogo" />
    </SHeaderIcons>
  );
};
