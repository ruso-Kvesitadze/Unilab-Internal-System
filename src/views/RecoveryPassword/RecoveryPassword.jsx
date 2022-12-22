import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  SRecoveryPasswordView,
  SDescription,
  SForm,
  SMarginTop,
  STitle,
  SAuthenticationSvgs,
  SVektorRecoveryRight,
  SStarRecoveryBottom,
} from "./RecoveryPassword.styled";

export const RecoveryPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <SRecoveryPasswordView>
      <Header />
      <SForm>
        <STitle>პაროლის აღდგენა</STitle>
        <SDescription>
          მიუთითე შენი ელ-ფოსტა, სადაც მიიღებ ინსტრუქციას პაროლის აღდგენის
          შესახებ
        </SDescription>
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
        <SMarginTop></SMarginTop>
        <Button width="21.25rem">გაგზავნა</Button>
      </SForm>
      <SAuthenticationSvgs>
        <SVektorRecoveryRight
          src="./public/assets/svg/vektorRecoveryRight.svg"
          alt="vector"
        />
        <SStarRecoveryBottom
          src="./public/assets/svg/StarRecoveryBottom.svg"
          alt="starTop"
        />
      </SAuthenticationSvgs>
    </SRecoveryPasswordView>
  );
};
