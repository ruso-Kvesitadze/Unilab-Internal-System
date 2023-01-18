import styled from "styled-components";
import { motion } from "framer-motion";

export const SMainDiv = styled.div`
  position: relative;
`;

export const SMainContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem 15rem 2rem;
  text-align: center;
  color: #ffffff;
`;

export const STitle = styled(motion.h4)`
  font-size: 1.75rem;
  font-weight: 700;
`;

export const SDescription = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.7rem;
  white-space: pre-line;
  max-width: 1366px;
  margin-bottom: 5.5rem;
`;

export const SMainPageSvgs = styled.div`
  z-index: -1;
`;
export const SStarLeftTop = styled.img`
  position: absolute;
  top: 17rem;
`;
export const SStarRight = styled.img`
  position: absolute;
  right: 18.75rem;
  top: 51rem;
`;
export const SVectorBottom = styled(motion.img)`
  position: absolute;
  left: 0rem;
  bottom: 12rem;
`;
