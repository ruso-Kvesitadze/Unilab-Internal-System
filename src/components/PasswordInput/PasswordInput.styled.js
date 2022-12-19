import { PasswordInput } from "@mantine/core";
import styled from "styled-components";

export const SPasswordInput = styled(PasswordInput)`
  & {
    display: flex;
    flex-direction: column;
    width: 21.25rem;
    gap: 0.5rem;
  }

  & .mantine-PasswordInput-label {
    font-size: 0.75rem;
    color: #ffffff;
  }

  & .mantine-PasswordInput-visibilityToggle {
    border-radius: 0.4rem;
  }

  & .mantine-PasswordInput-input {
    background-color: #f1f1f1;
    border-radius: 0.625rem;
    border: none;
    height: 2.5rem;
  }

  &:focus .mantine-PasswordInput-input {
    background-color: #ffffff;
    box-shadow: inset 0 0 0 2px #2984ce;
  }

  & .mantine-PasswordInput-innerInput {
    padding-left: 1.188rem;
    font-size: .875rem;
    color: #353535;
    top: 50%;
    transform: translateY(-50%);
  }
`;
