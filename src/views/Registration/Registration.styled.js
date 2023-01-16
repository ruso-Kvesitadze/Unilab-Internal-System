import styled from "styled-components";
import { Link } from "react-router-dom";

export const SRegistrationMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
`;
export const STitle = styled.h3`
  display: flex;
  justify-content: center;
  margin: 4.3rem 0 3rem 0;
  font-size: 1.875rem;
  font-weight: 700;
  color: #ffffff;
`;
export const SDescription = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  margin-bottom: 6.8rem;
  color: #ffffff;
`;
export const SContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const SGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem 5.5rem;
  margin-bottom: 12rem;
`;
export const ScenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SAuthenticationText = styled.p`
  font-size: 0.875rem;
  color: #ebebeb;
  margin-bottom: 6.25rem;
`;
export const SAuthenticationLink = styled(Link)`
  margin-left: 0.313rem;
  font-weight: 700;
  color: #ebebeb;
`;

export const SPrivacyCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SPrivacyCheckboxImg = styled.img`
  margin-left: 0.75rem;
  cursor: pointer;
`;
