import React, { Component } from "react";
import { ThirdHeader } from "../../components/ThirdHeader";
import { ProjectSlider } from "../../components/ProjectSlider";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import {
  SMainDiv,
  SMainPageSvgs,
  SStarLeftTop,
  SStarRight,
  SVectorBottom,
} from "./MainPage.styled";

export const MainPage = () => {
  return (
    <SMainDiv>
      <ThirdHeader />
      <ProjectSlider />
      <SMainPageSvgs>
        <SStarLeftTop src="assets/svg/MainPagestar2.svg" alt="StarLeftBottom" />
        <SStarRight
          src="assets/svg/MainPagestar1.svg"
          alt="StarLeftTop"
          layout
        />
        <SVectorBottom
          src="assets/svg/MainPageGroup.svg"
          alt="VectorRight"
          layout
        />
      </SMainPageSvgs>
      <Footer />
    </SMainDiv>
  );
};
