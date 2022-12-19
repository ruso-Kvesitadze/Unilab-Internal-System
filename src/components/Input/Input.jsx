import React, { useState } from "react";
import { SContainer, SInput, SLabel } from "./Input.styled";

export const Input = ({
  id,
  type,
  label,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <SContainer>
      <SLabel htmlFor={id}>{label}</SLabel>
      <SInput
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </SContainer>
  );
};
