import React from "react";
import {
  SCheckWrapper,
  SContainer,
  SInput,
  SInputWrapper,
  SLabel,
} from "./RadioInput.styled";
import { CircleCheck } from "./CircleCheck";

export const RadioInput = ({ id, label, name, value, isChecked, onChange }) => {
  return (
    <SContainer>
      <SInputWrapper>
        <SInput
          id={id}
          name={name}
          type="radio"
          checked={isChecked}
          onChange={() => onChange(value)}
        />
        <SCheckWrapper>
          <CircleCheck isChecked={isChecked} />
        </SCheckWrapper>
      </SInputWrapper>
      <SLabel htmlFor={id}>{label}</SLabel>
    </SContainer>
  );
};
