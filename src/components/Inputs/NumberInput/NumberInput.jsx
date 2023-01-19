import React, { useState } from "react";
import { Input } from "../Input";

export const NumberInput = ({
  id,
  label,
  name,
  placeholder,
  width,
  fontSize,
  fontWeight,
  value,
  onChange,
}) => {
  const handleOnChange = (e) => {
    if (isNaN(e.target.value)) return;
    onChange(e);
  };

  return (
    <Input
      id={id}
      type={"text"}
      label={label}
      name={name}
      width={width}
      fontSize={fontSize}
      fontWeight={fontWeight}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
};
