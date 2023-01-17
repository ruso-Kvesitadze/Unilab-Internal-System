import React from "react";
import { SCheckWrapper, SContainer, SInput, SInputWrapper, SLabel } from "./Checkbox.styled";
import { Check } from "./Check";

export const Checkbox = ({ id, label, name, isChecked, onChange }) => {
  return (
    <SContainer>
      <SInputWrapper>
        <SInput
          id={id}
          name={name}
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        <SCheckWrapper>
          <Check isChecked={isChecked} />
        </SCheckWrapper>
      </SInputWrapper>
      <SLabel htmlFor={id}>{label}</SLabel>
    </SContainer>
  );
};
