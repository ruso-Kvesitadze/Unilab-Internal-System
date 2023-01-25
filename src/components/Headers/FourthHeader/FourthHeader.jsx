import React, { useState } from "react";
import { popupVariants } from "./Popup.variants";
import {
  SFourthHeader,
  SHeaderUnilabLogo,
  SHeaderProperty,
  SProfileDiv,
  SProfilePicture,
  SProfileDropDown,
  SLanguageDiv,
  SLanguageText,
  SLanguageDropDown,
  SPopup,
  SPopupDiv,
  SUserName,
  SUserBorder,
  SMyAccount,
  SMyAccountImg,
  SLogOut,
  SLogOutImg,
  SUserProperty,
} from "./FourthHeader.styled";
export const FourthHeader = () => {
  const [isPopup, setIsPopup] = useState(false);
  const handleClickOpen = () => {
    setIsPopup(!isPopup);
  };
  return (
    <>
      <SFourthHeader>
        <SHeaderUnilabLogo to={"/"}>
          <img src="assets/images/unilab.webp" alt="Unilab" />
        </SHeaderUnilabLogo>
        <SHeaderProperty>
          <SProfileDiv onClick={handleClickOpen}>
            <SProfilePicture src="assets/images/image 5.png" alt="image5" />
            <SProfileDropDown
              src={
                isPopup
                  ? "assets/svg/ProfileUpArrow.svg"
                  : "assets/svg/ProfileDropDown.svg"
              }
              alt="ProfileDropDown"
            />
            {isPopup && (
              <SPopup
                variants={popupVariants}
                initial={"hidden"}
                animate={"visible"}
                transition={{ type: "spring", duration: 1 }}
              >
                <SPopupDiv>
                  <SUserName>ნინი წიკლაური</SUserName>
                  <SUserProperty>
                    <SUserBorder></SUserBorder>
                    <SMyAccount>
                      <SMyAccountImg src="assets/svg/user.svg" alt="user" />
                      <span>My Account</span>
                    </SMyAccount>
                    <SLogOut>
                      <SLogOutImg src="assets/svg/log-out.svg" alt="log-out" />
                      <span>Log out</span>
                    </SLogOut>
                  </SUserProperty>
                </SPopupDiv>
              </SPopup>
            )}
          </SProfileDiv>
          <SLanguageDiv>
            <SLanguageText>GEO</SLanguageText>
            <SLanguageDropDown
              src="assets/svg/LanguageDropDown.svg"
              alt="ProfileDropDown"
            />
          </SLanguageDiv>
        </SHeaderProperty>
      </SFourthHeader>
    </>
  );
};
