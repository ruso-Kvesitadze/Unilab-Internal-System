import React, { useState } from "react";
import { SecondHeader } from "../../components/SecondHeader";
import { PhoneNumberInput } from "../../components/PhoneNumberInput";
import { Dropdown } from "../../components/Dropdown";
import { CountryDropdown } from "../../components/CountryDropdown/CountryDropdown";
import { RadioInput } from "../../components/RadioInput/RadioInput";

export const Registration = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("საქართველო");
  const [degree, setDegree] = useState("");

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
        label="სქესი"
        width="10rem"
        placeholder="-"
        selected={gender}
        onSelect={(item) => {
          setGender(item);
        }}
        items={["მდედრობითი", "მამრობითი", "სხვა"]}
      />
      <CountryDropdown
        label="ქვეყანა"
        width="18.75rem"
        selected={country}
        icons={{
          საქართველო:
            "https://cdn.countryflags.com/thumbs/georgia/flag-round-250.png",
          ამერიკა:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png",
        }}
        // items={}
        onSelect={(item) => {
          setCountry(item);
        }}
      />
      <RadioInput
        id="bachelor"
        label="ბაკალავრი"
        value="bachelor"
        name="degree"
        isChecked={degree === "bachelor"}
        onChange={(value) => {
          setDegree(value);
        }}
      />
      <RadioInput
        id="masters"
        label="მაგისტრატურა"
        value="masters"
        name="degree"
        isChecked={degree === "masters"}
        onChange={(value) => setDegree(value)}
      />
    </div>
  );
};
