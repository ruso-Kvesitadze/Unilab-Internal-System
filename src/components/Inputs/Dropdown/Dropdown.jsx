import React, { useRef } from "react";
import { Input } from "../Input";
import {
  SArrowButton,
  SDropdownButton,
  SDropdownItem,
  SDropdownList,
  SDropdownWrapper,
} from "./Dropdown.styled";
import { DropArrow } from "../../DropArrow";
import { dropdownVariants } from "./Dropdown.variants";
import { getLongestString } from "../../../utils/dropdown";
import { useAutoClose } from "../../../hooks/useAutoClose";
import { AnimatePresence } from "framer-motion";

export const Dropdown = ({
  id,
  label,
  name,
  placeholder,
  width,
  gridArea,
  fontSize,
  fontWeight,
  items,
  selected,
  onSelect,
  LeftComponent,
}) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useAutoClose(dropdownRef, false);

  return (
    <SDropdownWrapper gridArea={gridArea} ref={dropdownRef}>
      <Input
        id={id}
        type={"text"}
        label={label}
        name={name}
        width={width}
        fontSize={fontSize}
        fontWeight={fontWeight}
        placeholder={placeholder}
        readOnly
        value={selected}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        RightComponent={
          <SArrowButton title="toggle dropdown">
            <DropArrow isOpen={isOpen} />
          </SArrowButton>
        }
        LeftComponent={LeftComponent}
      />
      <AnimatePresence>
        {isOpen && (
          <SDropdownList
            variants={dropdownVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {items ? (
              items.map((item) => (
                <SDropdownItem key={item}>
                  <SDropdownButton
                    onClick={() => {
                      onSelect(item);
                      setIsOpen(false);
                    }}
                    data-longestitem={getLongestString(items)}
                  >
                    {item}
                  </SDropdownButton>
                </SDropdownItem>
              ))
            ) : (
              <span>No items</span>
            )}
          </SDropdownList>
        )}
      </AnimatePresence>
    </SDropdownWrapper>
  );
};
