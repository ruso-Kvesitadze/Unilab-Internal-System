import React, { useState } from "react";
import { SecondHeader } from "../../components/SecondHeader";
import { PhoneNumberInput } from "../../components/PhoneNumberInput";
import { Dropdown } from "../../components/Dropdown";
export const Registration = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div>
      <SecondHeader />
      <PhoneNumberInput
        label="მობილურის ნომერი"
        width="18.75rem"
        fontSize="1rem"
        countryCode={995}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Dropdown
        label={"სქესი"}
        width="10rem"
        placeholder={"-"}
        selected={gender}
        onSelect={(item) => {
          setGender(item);
        }}
        items={["მდედრობითი", "მამრობითი", "სხვა"]}
      />
    </div>
  );
};
