import React, { useState } from "react";
import { SecondHeader } from "../../components/SecondHeader";
import { PhoneNumberInput } from "../../components/PhoneNumberInput";
export const Registration = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

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
    </div>
  );
};
