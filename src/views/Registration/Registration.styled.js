import styled from "styled-components";
import { Link } from "react-router-dom";

export const STitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
`;

export const SDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 3.75rem;
  color: #ffffff;
`;

export const SAuthenticationText = styled.p`
  font-size: 0.875rem;
  color: #ebebeb;
  margin-top: 1.75rem;
`;

export const SAuthenticationLink = styled(Link)`
  margin-left: 0.313rem;
  font-weight: 700;
  color: #ebebeb;
`;
