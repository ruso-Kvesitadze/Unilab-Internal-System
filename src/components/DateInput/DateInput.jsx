import React, { useState } from "react";
import { Input } from "../Input";
import DatePicker from "uni-date-picker";
import { Button } from "../Button";
import dayjs from "dayjs";
import {
  SDateInputWrapper,
  SDatePickerWrapper,
  SCalendarIconContainer,
  SCalendarIcon,
} from "./DateInput.styled";

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
  LeftComponent,
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
        LeftComponent={
          <SCalendarIconContainer>
            <SCalendarIcon src="assets/svg/calendar.svg" alt="calendar" />
          </SCalendarIconContainer>
        }
        RightComponent={RightComponent}
        onClick={() => setIsOpen(!isOpen)}
      />
      <SDatePickerWrapper
        animate={
          isOpen
            ? { opacity: 1, top: "100%", pointerEvents: "all" }
            : { opacity: 0, top: "50%", pointerEvents: "none" }
        }
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
