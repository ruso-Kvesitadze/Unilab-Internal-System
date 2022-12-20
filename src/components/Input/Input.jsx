import React from "react";
import { SContainer, SLabel, SInputWrapper, SInput } from "./Input.styled";

export const Input = ({
  id,
  type,
  label,
  name,
  placeholder,
  value,
  LeftComponent,
  RightComponent,
  onChange,
}) => {
  return (
    <SContainer>
      <SLabel htmlFor={id}>{label}</SLabel>
      <SInputWrapper>
        {LeftComponent}
        <SInput
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {RightComponent}
      </SInputWrapper>
    </SContainer>
  );
};
