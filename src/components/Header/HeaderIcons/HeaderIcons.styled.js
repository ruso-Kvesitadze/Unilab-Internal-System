import styled from "styled-components";

export const SHeaderIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ margin }) => (margin ? margin : "0")};
  width: ${({ width }) => (width ? width : "13.25rem")};
  img {
    height: ${({ height }) => (height ? height : "6.25rem")};
  }
`;
