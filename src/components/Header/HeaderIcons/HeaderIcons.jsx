import React from "react";
import { SHeaderIcons } from "./HeaderIcons.styled";

export const HeaderIcons = ({ width, height, margin }) => {
  return (
    <SHeaderIcons width={width} height={height} margin={margin}>
      <img src="assets/svg/unilab.svg" alt="unilab" />
      <img src="assets/png/iliaUniLogo.png" alt="iliaUniLogo" />
    </SHeaderIcons>
  );
};
