import React, { useState } from "react";
import { SecondHeader } from "../../components/SecondHeader";
import { PhoneNumberInput } from "../../components/PhoneNumberInput";
import { Dropdown } from "../../components/Dropdown";
import { CountryDropdown } from "../../components/CountryDropdown/CountryDropdown";
import { RadioInput } from "../../components/RadioInput/RadioInput";
import { Input } from "../../components/Input";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Button } from "../../components/Button";
import {
  SAuthenticationLink,
  SAuthenticationText,
  SDescription,
  STitle,
} from "./Registration.styled";
import { PasswordInput } from "../../components/PasswordInput";
import { NumberInput } from "../../components/NumberInput";
import { DateInput } from "../../components/DateInput";
import dayjs from "dayjs";

export const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("საქართველო");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [didAccept, setDidAccept] = useState(false);
  const [status, setStatus] = useState("");
  const [degree, setDegree] = useState("");

  return (
    <div>
      <SecondHeader />
      <STitle>გამარჯობა 👋</STitle>
      <SDescription>
        უნილაბის სამართავ პანელში მოსახვედრად, გთხოვთ გაიაროთ ავტორიზაცია
      </SDescription>
      <Input
        id="firstName"
        type="text"
        name="firstName"
        label="სახელი"
        width="18.75rem"
        placeholder="სახელი"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <Input
        id="lastName"
        type="text"
        name="lastName"
        label="გვარი"
        width="18.75rem"
        placeholder="გვარი"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <NumberInput
        id="id"
        name="id"
        label="პირადი ნომერი"
        width="18.75rem"
        placeholder="0123456789"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <Input
        id="email"
        type="email"
        name="email"
        label="ელ-ფოსტა"
        width="18.75rem"
        placeholder="info@unilab.ge"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <PasswordInput
        id="password"
        name="password"
        label="პაროლი"
        width="18.75rem"
        placeholder="***************"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <PasswordInput
        id="password"
        name="password"
        label="პაროლი განმეორებით"
        width="18.75rem"
        placeholder="***************"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <PhoneNumberInput
        label="მობილურის ნომერი"
        width="18.75rem"
        fontSize="1rem"
        countryCode={995}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <DateInput
        label={"დაბადების თარიღი"}
        width="18.75rem"
        maxDate={dayjs().subtract(18, "year")}
        defaultDate={dayjs().subtract(18, "year")}
        placeholder="15.10.2022"
        selectedDate={dateOfBirth?.format("DD.MM.YYYY")}
        onSelect={(date) => {
          setDateOfBirth(date);
        }}
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
        items={["საქართველო", "ამერიკა"]}
        onSelect={(item) => {
          setCountry(item);
        }}
      />
      <Dropdown
        label="რეგიონი"
        width="18.75rem"
        placeholder="აირჩიეთ რეგიონი"
        selected={region}
        onSelect={(item) => {
          setRegion(item);
        }}
        items={["1", "2", "3"]}
      />
      <Dropdown
        label="ქალაქი"
        width="18.75rem"
        placeholder="აირჩიეთ ქალაქი"
        selected={city}
        onSelect={(item) => {
          setCity(item);
        }}
        items={["1", "2", "3"]}
      />
      <Input
        type="text"
        name="fullAdress"
        label="სრული მისამართი, ქუჩა, ნომერი, შენობა"
        width="42.125rem"
        placeholder="ჩაწერეთ სრული მისამართი"
        value={fullAddress}
        onChange={(e) => {
          setFullAddress(e.target.value);
        }}
      />
      <Dropdown
        label="სტატუსი"
        width="18.75rem"
        placeholder="აირჩიეთ სტატუსი"
        selected={status}
        onSelect={(item) => {
          setStatus(item);
        }}
        items={["მოსწავლე", "სტუდენტი", "კურსდამთავრებული", "სხვა"]}
      />
      <Checkbox
        id="accept"
        name="accept"
        label="ვეთანხმები მოხმარების წესებსა და კონფიდენციალურობის პოლიტიკას"
        isChecked={didAccept}
        onChange={() => {
          setDidAccept(!didAccept);
        }}
      />
      <Button width="21.25rem">რეგისტრაცია</Button>
      <SAuthenticationText>
        უკვე გაქვს ანგარიში?{" "}
        <SAuthenticationLink to="/">გაიარე ავტორიზაცია</SAuthenticationLink>
      </SAuthenticationText>
      {/* <RadioInput
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
      /> */}
    </div>
  );
};
