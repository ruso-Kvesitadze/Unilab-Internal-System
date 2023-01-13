import styled from "styled-components";
import { motion } from "framer-motion";

export const SDateInputWrapper = styled.div`
  position: relative;
  width: fit-content;
  & input {
    cursor: pointer;
  }
`;

export const SDatePickerWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  top: 100%;
  right: 0;
  margin-top: 0.375rem;
  z-index: 1;
`;
