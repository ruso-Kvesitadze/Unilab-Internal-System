import React from "react";
import { SPasswordInput } from "./PasswordInput.styled";

export const PasswordInput = ({
  id,
  label,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <SPasswordInput
      id={id}
      label={label}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
