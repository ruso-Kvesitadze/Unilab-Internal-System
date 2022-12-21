import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Button } from "../../components/Button";
import {
  SDescription,
  SForgotPasswordLink,
  SForm,
  SInputWrapper,
  SRegistrationLink,
  SRegistrationText,
  SRememberWrapper,
  STitle,
} from "./Authentication.styled";

export const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);

  return (
    <div>
      <Header />
      <SForm>
        <STitle>გამარჯობა 👋</STitle>
        <SDescription>
          უნილაბის სამართავ პანელში მოსახვედრად, გთხოვთ გაიაროთ ავტორიზაცია
        </SDescription>
        <SInputWrapper>
          <Input
            id="email"
            type="text"
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
            placeholder="***************"
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
          <SForgotPasswordLink href="#">დაგავიწყდა პაროლი?</SForgotPasswordLink>
        </SRememberWrapper>

        <Button width="21.25rem">ავტორიზაცია</Button>
        <SRegistrationText>
          არ გაქვს ანგარიში?
          <SRegistrationLink href="#">დარეგისტრირდი</SRegistrationLink>
        </SRegistrationText>
      </SForm>
    </div>
  );
};
