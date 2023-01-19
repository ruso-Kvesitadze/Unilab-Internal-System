import React, { useState } from "react";
import { Input } from "../Input";
import DatePicker from "uni-date-picker";
import { Button } from "../../Button";
import dayjs from "dayjs";
import {
  SDateInputWrapper,
  SDatePickerWrapper,
  SCalendarIconContainer,
  SCalendarIcon,
} from "./DateInput.styled";
import { datePickerVariants } from "./DateInput.variants";

export const DateInput = ({
  id,
  label,
  name,
  placeholder,
  defaultDate = dayjs(),
  maxDate,
  width,
  fontSize,
  fontWeight,
  selectedDate,
  onSelect,
  RightComponent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (date) => {
    setIsOpen(false);
    onSelect(date);
  };
  return (
    <SDateInputWrapper>
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
        value={selectedDate}
        onClick={() => setIsOpen(!isOpen)}
        LeftComponent={
          <SCalendarIconContainer>
            <SCalendarIcon src="assets/svg/calendar.svg" alt="calendar" />
          </SCalendarIconContainer>
        }
        RightComponent={RightComponent}
      />
      <SDatePickerWrapper
        variants={datePickerVariants}
        initial={"hidden"}
        animate={isOpen ? "visible" : "hidden"}
        transition={{ duration: 0.4, type: "spring" }}
      >
        <DatePicker
          defaultDate={defaultDate}
          maxDate={maxDate}
          onSubmit={handleSubmit}
          locale={dayjs.locale()}
          submitComponent={<Button>არჩევა</Button>}
        />
      </SDatePickerWrapper>
    </SDateInputWrapper>
  );
};
