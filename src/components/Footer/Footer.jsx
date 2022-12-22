import React from "react";
import { HeaderIcons } from "../Header/HeaderIcons";
import {
  SFooter,
  SFooterInfo,
  SFooterTopLines,
  SCompanyLogo,
  SAboutProjectDiv,
  SAboutProject,
  SSocialIcons,
  SAboutProjectContainer,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <SFooter>
      <SFooterTopLines>
        <img src="./public/assets/svg/lineLeft.svg" alt="lineLeft" />
        <img src="./public/assets/svg/lineRight.svg" alt="lineRight" />
      </SFooterTopLines>
      <SFooterInfo>
        <SCompanyLogo>
          <HeaderIcons width="auto" height="3.563rem" />
        </SCompanyLogo>
        <SAboutProjectDiv>
          <SAboutProjectContainer>
            <SAboutProject>პროექტის შესახებ</SAboutProject>
          </SAboutProjectContainer>
          <img src="./public/assets/png/unilabText.png" alt="unilabText" />
        </SAboutProjectDiv>
        <SSocialIcons>
          <a href="">
            <img
              src="./public/assets/svg/facebookLogo.svg"
              alt="facebookLogo"
            />
          </a>
          <a href="">
            <img src="./public/assets/svg/youtubeLogo.svg" alt="youtubeLogo" />
          </a>
          <a href="">
            <img
              src="./public/assets/svg/linkedinLogo.svg"
              alt="linkedinLogo"
            />
          </a>
        </SSocialIcons>
      </SFooterInfo>
    </SFooter>
  );
};
