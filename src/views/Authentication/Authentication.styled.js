import styled from "styled-components";

export const SForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 41.25rem;
`;

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

export const SInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.375rem;
  margin-bottom: 0.75rem;
`;

export const SRememberWrapper = styled.div`
  display: flex;
  width: 21.25rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

export const SForgotPasswordLink = styled.a`
  display: block;
  font-size: 0.6875rem;
  width: fit-content;
  color: #ebebeb;
`;

export const SRegistrationText = styled.p`
  font-size: 0.875rem;
  color: #ebebeb;
  margin-top: 1.75rem;
`;

export const SRegistrationLink = styled.a`
  font-weight: 700;
  color: #ebebeb;
`;
