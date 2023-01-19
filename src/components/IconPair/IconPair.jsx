import React from "react";
import { SIconPair } from "./IconPair.styled";

export const IconPair = ({ width, height, gap, margin }) => {
  return (
    <SIconPair width={width} height={height} gap={gap} margin={margin}>
      <img src="assets/images/unilab.webp" alt="unilab" />
      <img src="assets/svg/iliaUniLogo.svg" alt="iliaUniLogo" />
    </SIconPair>
  );
};
