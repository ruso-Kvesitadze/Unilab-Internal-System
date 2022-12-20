import React from "react";
import { SContainer, SLabel, SInputWrapper, SInput } from "./Input.styled";

export const Input = ({
  id,
  type,
  label,
  name,
  placeholder,
  width,
  fontSize,
  fontWeight,
  value,
  onChange,
  LeftComponent,
  RightComponent,
}) => {
  return (
    <SContainer width={width}>
      <SLabel htmlFor={id}>{label}</SLabel>
      <SInputWrapper>
        {LeftComponent}
        <SInput
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          width={width}
          fontSize={fontSize}
          fontWeight={fontWeight}
          value={value}
          onChange={onChange}
        />
        {RightComponent}
      </SInputWrapper>
    </SContainer>
  );
};
