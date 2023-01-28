import styled from "styled-components";
import { motion } from "framer-motion";

export const SSideBarContainer = styled(motion.nav)`
  position: absolute;
  width: ${({ width }) => (width ? width : "353px")};
  height: 723px;
  background-color: #1a1b1c;
  border-radius: 0px 0px 6px 0px;
  top: 6.4rem;
`;

export const SSideBarDiv = styled.div`
  height: 100%;
  display: flex;
  margin: 92px 0 0 33px;
  overflow: hidden;
`;

export const SSideBarButton = styled.div`
  position: absolute;
  width: 21px;
  height: 155px;
  transform: translate(100%, -50%);
  top: 50%;
  right: 0;
  background-color: #1a1b1c;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
