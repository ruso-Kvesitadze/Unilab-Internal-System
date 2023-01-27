import React, { useState } from "react";
import {
  SSideBarContainer,
  SSideBarDiv,
  SSideBarButton,
} from "./SideBar.styled";
export const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleMenu = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <SSideBarContainer
      animate={{ width: showSideBar ? "84px" : "353px" }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <SSideBarDiv>
        <ul>
          <li>
            <h1>testtesttesttesttesttesttesttesttesttest</h1>
          </li>
          <li>test</li>
          <li>test</li>
        </ul>
      </SSideBarDiv>
      <SSideBarButton onClick={toggleMenu}>
        <img src="assets/svg/ProfileDropDown.svg" alt="" />
      </SSideBarButton>
    </SSideBarContainer>
  );
};
