import React from "react";
import { SIconPair } from "./IconPair.styled";

export const IconPair = ({ size, gap, margin }) => {
  return (
    <SIconPair size={size} gap={gap} margin={margin}>
      <img src="assets/svg/unilab.svg" alt="unilab" />
      <img src="assets/png/iliaUniLogo.png" alt="iliaUniLogo" />
    </SIconPair>
  );
};
