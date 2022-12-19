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
  padding: 0.75rem 1.188rem;
  font-size: 0.875rem;
  color: #353535;
  background-color: #f1f1f1;
  border: none;
  border-radius: 0.625rem;
  outline: none;
  
  &:not(:placeholder-shown),
  &:focus {
    background-color: #ffffff;
    box-shadow: inset 0 0 0 2px #2984ce;
  }
`;
