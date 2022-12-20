import React, { useState } from "react";
import {
  SContainer,
  SLabel,
  SInput,
  SInputWrapper,
} from "./PasswordInput.styled";
import { Eye } from "../Eye";

export const PasswordInput = ({
  id,
  label,
  name,
  placeholder,
  value,
  onChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SContainer>
      <SLabel htmlFor={id}>{label}</SLabel>
      <SInputWrapper>
        <SInput
          id={id}
          type={isPasswordVisible ? "password" : "text"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <Eye
          isPasswordVisible={isPasswordVisible}
          onClick={handleVisibilityToggle}
        />
      </SInputWrapper>
    </SContainer>
  );
};
