import React, { useState } from "react";
import { Eye } from "../Eye";
import { Input } from "../Input";

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
    <Input
      id={id}
      type={isPasswordVisible ? "text" : "password"}
      label={label}
      name={name}
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
