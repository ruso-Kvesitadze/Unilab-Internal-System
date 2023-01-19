import React from "react";
import { Dropdown } from "../Dropdown";
import { SCountryIconContainer, SIcon } from "./CountryDropdown.styled";

export const CountryDropdown = ({
  id,
  label,
  name,
  placeholder,
  width,
  fontSize,
  fontWeight,
  icons,
  items,
  selected,
  onSelect,
}) => {
  return (
    <Dropdown
      id={id}
      type={"text"}
      label={label}
      name={name}
      width={width}
      fontSize={fontSize}
      fontWeight={fontWeight}
      placeholder={placeholder}
      items={items}
      onSelect={onSelect}
      selected={selected}
      LeftComponent={
        <SCountryIconContainer>
          <SIcon src={icons[selected]} alt="country flag" />
        </SCountryIconContainer>
      }
    />
  );
};
