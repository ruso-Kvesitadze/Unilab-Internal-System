import React, { useState } from "react";
import { Input } from "../Input";
import { SCountryCode } from "./PhoneNumberInput.styled.js";

const patterns = {
  995: "--- --- ---",
};

const getLastDigitIndex = (string) => {
  for (let i = string.length - 1; i >= 0; i--) {
    if (/\d/.test(string[i])) return i;
  }
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
    const value = e.target.value;
    const numberString = value.split(" ").join("").replaceAll("-", "");
    let newValue = patterns[countryCode];

    // replace each (-) symbol with the supplied digit
    for (const char of numberString) {
      if (!/\d/.test(char)) continue;
      newValue = newValue.replace("-", char);
    }

    if (newValue === patterns[countryCode]) newValue = "";

    let currentCarretIndex = e.target.selectionStart;
    e.target.value = newValue;

    onChange(e);

    let prevCaretIndex = getLastDigitIndex(value) + 1;
    let nextCarretIndex = getLastDigitIndex(newValue) + 1;

    // if the caret was moved to a previous point stop it from pointing to the last digit
    if (currentCarretIndex >= prevCaretIndex) {
      return e.target.setSelectionRange(nextCarretIndex, nextCarretIndex);
    }

    // move caret if it's not pointing at a digit
    while (
      !/\d/.test(newValue[currentCarretIndex]) &&
      currentCarretIndex < newValue.length
    ) {
      currentCarretIndex += 1;
    }

    e.target.setSelectionRange(currentCarretIndex, currentCarretIndex);
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
