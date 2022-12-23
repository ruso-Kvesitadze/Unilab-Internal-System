import React, { useState } from "react";
import { Input } from "../Input";
import {
  SArrowButton,
  SDropdownButton,
  SDropdownItem,
  SDropdownList,
  SDropdownWrapper,
} from "./Dropdown.styled";
import { DropArrow } from "../DropArrow";

const getLongestString = (strings) => {
  return strings.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
};

export const Dropdown = ({
  id,
  label,
  name,
  placeholder,
  width,
  fontSize,
  fontWeight,
  items,
  selected,
  onSelect,
  LeftComponent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SDropdownWrapper>
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
        RightComponent={
          <SArrowButton
            onClick={() => {
              console.log("open");
              setIsOpen(!isOpen);
            }}
          >
            <DropArrow isOpen={isOpen} />
          </SArrowButton>
        }
        LeftComponent={LeftComponent}
      />
      <SDropdownList
        animate={
          isOpen
            ? { opacity: 1, top: "100%", pointerEvents: "all" }
            : { opacity: 0, top: "50%", pointerEvents: "none" }
        }
        transition={{ duration: 0.4, type: "spring" }}
      >
        {items.map((item) => (
          <SDropdownItem key={item}>
            <SDropdownButton
              onClick={() => {
                onSelect(item);
                setIsOpen(false);
              }}
              data-longestItem={getLongestString(items)}
              whileHover={{
                fontWeight: "700",
                textDecorationLine: "underline",
              }}
            >
              {item}
            </SDropdownButton>
          </SDropdownItem>
        ))}
      </SDropdownList>
    </SDropdownWrapper>
  );
};
