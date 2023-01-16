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
  gridArea,
  readOnly,
  value,
  onChange,
  onClick,
  LeftComponent,
  RightComponent,
}) => {
  return (
    <SContainer width={width} gridArea={gridArea}>
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
          readOnly={readOnly}
          value={value || ""}
          onChange={onChange}
          onClick={onClick}
        />
        {RightComponent}
      </SInputWrapper>
    </SContainer>
  );
};
