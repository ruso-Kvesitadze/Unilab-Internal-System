import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "100%")};
  gap: 0.5rem;
`;

export const SLabel = styled.label`
  font-size: 0.75rem;
  color: #ffffff;
`;

export const SInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.625rem;
  background-color: #f1f1f1;
  padding: 0 1.2rem;
  overflow: hidden;
  gap: 1.2rem;

  &:focus-within {
    background-color: #ffffff;
    box-shadow: inset 0 0 0 2px #2984ce;
  }
`;

export const SInput = styled.input`
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.875rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  padding: 0.75rem 0;
  color: #353535;
  background-color: transparent;
  border: none;
  outline: none;
`;
