import React from "react";
import { Input } from "../Input";
import { SCountryCode } from "./PhoneNumberInput.styled.js";
import { handleNumberChange } from "../../../utils/phoneNumber";

const patterns = {
  995: "--- --- ---",
};

export const PhoneNumberInput = ({
  id,
  label,
  name,
  width,
  fontSize,
  fontWeight,
  countryCode,
  value,
  onChange,
}) => {
  const handleChange = (e) => {
    handleNumberChange(e, patterns, countryCode, onChange);
  };

  return (
    <Input
      id={id}
      type={"tel"}
      name={name}
      label={label}
      width={width}
      fontSize={fontSize}
      fontWeight={fontWeight}
      placeholder={patterns[countryCode]}
      value={value}
      onChange={handleChange}
      LeftComponent={<SCountryCode>+{countryCode}</SCountryCode>}
    />
  );
};
