import React, { useState } from "react";
import { PhoneNumberInput } from "../../PhoneNumberInput";
import { Input } from "../../Input";
import { Dropdown } from "../../Dropdown";
import {
  SAdditionalInformationText,
  SAdditionalInfoSchool,
  SAdditionalInfoSchoolGrid,
  SAdditionalInfoSchoolContainer,
} from "./AdditionalInfoSchool.styeld";
export const AdditionalInfoSchool = () => {
  const [schoolNumber, setSchoolNumber] = useState("");
  const [parentFirstName, setParentFirstName] = useState("");
  const [schoolClass, setSchoolClass] = useState("");
  const [parentlastName, setParentLastName] = useState("");
  const [parentPhoneNumber, setParentPhoneNumber] = useState("");

  return (
    <SAdditionalInfoSchool>
      <SAdditionalInformationText>
        გთხოვთ, მოგვაწოდოთ დამატებითი ინფორმაცია
      </SAdditionalInformationText>
      <SAdditionalInfoSchoolContainer>
        <SAdditionalInfoSchoolGrid>
          <Input
            id="schoolNumber"
            type="text"
            name="schoolNumber"
            label="სკოლის ნომერი"
            width="18.75rem"
            placeholder="მიუთითეთ ნომერი"
            value={schoolNumber}
            onChange={(e) => {
              setSchoolNumber(e.target.value);
            }}
          />
          <Dropdown
            label="კლასი"
            width="5.5rem"
            gridArea="auto / 2 / auto / 4"
            placeholder=""
            selected={schoolClass}
            onSelect={(item) => {
              setSchoolClass(item);
            }}
            items={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
            ]}
          />
          <Input
            id="parentFirstName"
            type="text"
            name="parentFirstName"
            label="მშობლის სახელი "
            width="18.75rem"
            placeholder="მიუთითეთ მშობლის სახელი"
            value={parentFirstName}
            onChange={(e) => {
              setParentFirstName(e.target.value);
            }}
          />
          <Input
            id="parentlastName"
            type="text"
            name="parentlastName"
            label="მშობლის გვარი"
            width="18.75rem"
            placeholder="მიუთითეთ მშობლის გვარი"
            value={parentlastName}
            onChange={(e) => {
              setParentLastName(e.target.value);
            }}
          />
          <PhoneNumberInput
            label="მობილურის ნომერი"
            width="18.75rem"
            fontSize="1rem"
            countryCode={995}
            value={parentPhoneNumber}
            onChange={(e) => setParentPhoneNumber(e.target.value)}
          />
        </SAdditionalInfoSchoolGrid>
      </SAdditionalInfoSchoolContainer>
    </SAdditionalInfoSchool>
  );
};
