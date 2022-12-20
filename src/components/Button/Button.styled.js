import styled from "styled-components";

export const SButton = styled.button`
  width: ${({ width }) => (width ? width : "100%")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.875rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  padding: 0.75rem;
  border: none;
  border-radius: 0.625rem;
  background-color: ${({ secondary }) => (secondary ? "#ffffff" : "#4980c0")};
  color: ${({ secondary }) => (secondary ? "#000000" : "#ffffff")};
  cursor: pointer;
`;
