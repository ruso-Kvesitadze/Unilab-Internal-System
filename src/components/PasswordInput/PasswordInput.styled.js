import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.25rem;
  gap: 0.5rem;
`;

export const SLabel = styled.label`
  font-size: 0.75rem;
  color: #ffffff;
`;

export const SInput = styled.input`
  width: 100%;
  font-size: 0.875rem;
  color: #353535;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const SInputWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 0.625rem;
  background-color: #f1f1f1;
  padding: 0.75rem 1.2rem;
  overflow: hidden;
  gap: 1.2rem;

  &:focus-within {
    background-color: #ffffff;
    box-shadow: inset 0 0 0 2px #2984ce;
  }
`;
