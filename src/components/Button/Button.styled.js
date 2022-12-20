import styled from "styled-components";

export const SButton = styled.button`
  width: 21.25rem;
  font-size: 0.875rem;
  padding: 0.75rem;
  border: none;
  border-radius: 0.625rem;
  background-color: ${({ secondary }) => (secondary ? "#ffffff" : "#4980c0")};
  color: ${({ secondary }) => (secondary ? "#000000" : "#ffffff")};
  cursor: pointer;
`;
