import { Link } from "react-router-dom";
import styled from "styled-components";

export const SPrivacyPolicyView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: #ffffff;
`;
export const SPrivacyPolicy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18rem;
`;

export const STitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 4.688rem 0rem 6.625rem;
`;

export const SPreRegistrationSection = styled.section`
  h5 {
    text-align: center;
    font-size:1.25rem; 
    margin-bottom:2.125rem;
}
  ul {
    list-style-type: none;
    margin-bottom: 5.5rem;
    li {
        margin: 0rem 5rem; 
        max-width: 80rem;  
        Font size: 1rem;
        weight: 400; 
        margin-bottom: 1.875rem;
    }
  }
`;

export const SButton = styled(Link)`
  width: 21.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0.75rem;
  border: none;
  border-radius: 0.625rem;
  background-color: #4980c0;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;
