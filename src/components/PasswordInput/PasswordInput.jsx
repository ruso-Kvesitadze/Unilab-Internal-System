import React, { useState } from "react";
import { Eye } from "../Eye";
import { Input } from "../Input";

export const PasswordInput = ({
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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Input
      id={id}
      type={isPasswordVisible ? "text" : "password"}
      label={label}
      name={name}
      width={width}
      fontSize={fontSize}
      fontWeight={fontWeight}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      RightComponent={
        <Eye
          isPasswordVisible={isPasswordVisible}
          onClick={handleVisibilityToggle}
        />
      }
    />
  );
};
