import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Inputs/Input";
import { PasswordInput } from "../../components/Inputs/PasswordInput";
import { Checkbox } from "../../components/Inputs/Checkbox/Checkbox";
import { Button } from "../../components/Button";
import {
  SAuthenticationView,
  SDescription,
  SForgotPasswordLink,
  SForm,
  SInputWrapper,
  SRegistrationLink,
  SRegistrationText,
  SRememberWrapper,
  STitle,
  SAuthenticationSvgs,
  SVectorSvg,
  StarTopSvg,
  StarBottomSvg,
} from "./Authentication.styled";

export const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);

  return (
    <SAuthenticationView>
      <Header />
      <SForm>
        <STitle>გამარჯობა 👋</STitle>
        <SDescription>
          უნილაბის სამართავ პანელში მოსახვედრად, გთხოვთ გაიაროთ ავტორიზაცია
        </SDescription>
        <SInputWrapper>
          <Input
            id="email"
            type="email"
            name="email"
            label="ელ-ფოსტა"
            width="21.25rem"
            placeholder="info@unilab.ge"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <PasswordInput
            id="password"
            name="password"
            label="პაროლი"
            width={"21.25rem"}
            placeholder="●●●●●●●●"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </SInputWrapper>
        <SRememberWrapper>
          <Checkbox
            id="remember"
            name="remember"
            label="დამიმახსოვრე"
            isChecked={shouldRemember}
            onChange={() => {
              setShouldRemember(!shouldRemember);
            }}
          />
          <SForgotPasswordLink to={"/recovery-password"}>
            დაგავიწყდა პაროლი?
          </SForgotPasswordLink>
        </SRememberWrapper>

        <Button width="21.25rem">ავტორიზაცია</Button>
        <SRegistrationText>
          არ გაქვს ანგარიში?
          <SRegistrationLink to={"/registration"}>
            დარეგისტრირდი
          </SRegistrationLink>
        </SRegistrationText>
      </SForm>
      <SAuthenticationSvgs>
        <SVectorSvg src="assets/svg/vector.svg" alt="vector" />
        <StarTopSvg src="assets/svg/starTop.svg" alt="starTop" />
        <StarBottomSvg src="assets/svg/starBottom.svg" alt="starTop" />
      </SAuthenticationSvgs>
    </SAuthenticationView>
  );
};
