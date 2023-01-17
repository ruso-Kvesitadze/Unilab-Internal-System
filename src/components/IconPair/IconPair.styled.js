import styled from "styled-components";

export const SIconPair = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => (margin ? margin : "0")};

  img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`;
