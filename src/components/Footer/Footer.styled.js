import styled from "styled-components";

export const SFooter = styled.footer`
  width: 100%;
  color: #ffffff;
`;

export const SFooterTopLines = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    max-width: 45%;
  }
`;

export const SFooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 23.813rem;
  align-items: center;
`;
export const SCompanyLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 2.8rem;
  width: 13rem;
  img {
    margin-left: 1.7rem;
  }
`;
export const SAboutProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 16rem;
  height: 100%;
`;

export const SAboutProjectContainer = styled.a`
  display: flex;
  cursor: pointer;
`;
export const SAboutProject = styled.div`
  text-align: center;
  width: 15.688rem;
  height: 4.438rem;
  padding: 1.625rem;
  background-image: linear-gradient(rgba(49, 45, 231, 1), rgba(49, 45, 231, 1)),
    linear-gradient(rgba(49, 45, 231, 1), rgba(49, 45, 231, 1)),
    linear-gradient(rgba(49, 45, 231, 1), rgba(49, 45, 231, 1)),
    linear-gradient(rgba(49, 45, 231, 1), rgba(49, 45, 231, 1));
  background-repeat: no-repeat;
  background-size: 0.125rem 100%, 70% 0.125rem, 0.125rem 100%, 70% 0.125rem,
    calc(100% - 0.5rem) calc(100% - 0.5rem);
  background-position: left top, left top, right bottom, right bottom, 1px 1px;

  a {
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const SSocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 13rem;
  margin-right: 2.8rem;
  a {
    img {
      border-radius: 50%;
    }
  }
`;
