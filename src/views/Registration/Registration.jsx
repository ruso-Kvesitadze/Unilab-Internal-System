import React, { useState } from "react";
import { SecondHeader } from "../../components/SecondHeader";
import { PhoneNumberInput } from "../../components/Inputs/PhoneNumberInput";
import { Dropdown } from "../../components/Inputs/Dropdown";
import { CountryDropdown } from "../../components/Inputs/CountryDropdown";
import { Input } from "../../components/Inputs/Input";
import { Checkbox } from "../../components/Inputs/Checkbox/Checkbox";
import { PasswordInput } from "../../components/Inputs/PasswordInput";
import { NumberInput } from "../../components/Inputs/NumberInput";
import { DateInput } from "../../components/Inputs/DateInput";
import { Button } from "../../components/Button";
import { AdditionalInfoSchool } from "../../components/AdditionalInformation/AdditionalInfoSchool";
import { AdditionalInfoUniversity } from "../../components/AdditionalInformation/AdditionalInfoUniversity";
import {
  SRegistrationMainDiv,
  SContainer,
  SGridContainer,
  SAuthenticationLink,
  SAuthenticationText,
  SDescription,
  STitle,
  ScenterDiv,
  SPrivacyCheckbox,
  SPrivacyCheckboxImg,
  SDivisor,
  SRegistrationSvgs,
  SStarLeftTop,
  SStarLeftBottom,
  SVectorRight,
} from "./Registration.styled";
import { motion } from "framer-motion";

import dayjs from "dayjs";
import { Link } from "react-router-dom";
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

  return (
    <SRegistrationMainDiv>
      <SecondHeader />
      <STitle>გამარჯობა</STitle>
      <SDescription>
        უნილაბის სამართავ პანელში მოსახვედრად, გთხოვთ გაიაროთ ავტორიზაცია
      </SDescription>
      <SContainer>
        <SGridContainer>
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
            placeholder="●●●●●●●●"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            label="პაროლი განმეორებით"
            width="18.75rem"
            placeholder="●●●●●●●●"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <PhoneNumberInput
            id="phoneNumber"
            label="მობილურის ნომერი"
            width="18.75rem"
            fontSize="1rem"
            countryCode={995}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <DateInput
            id="dateOfBirth"
            label={"დაბადების თარიღი"}
            width="18.75rem"
            defaultDate={dayjs()}
            placeholder="15.10.2022"
            selectedDate={dateOfBirth?.format("DD.MM.YYYY")}
            onSelect={(date) => {
              setDateOfBirth(date);
            }}
          />
          <Dropdown
            id="gender"
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
            id="country"
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
            id="region"
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
            id="city"
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
            id="fullAdress"
            type="text"
            name="fullAdress"
            label="სრული მისამართი, ქუჩა, ნომერი, შენობა"
            width="42.125rem"
            gridArea="auto / 1 / auto / 4"
            placeholder="ჩაწერეთ სრული მისამართი"
            value={fullAddress}
            onChange={(e) => {
              setFullAddress(e.target.value);
            }}
          />
          <Dropdown
            id="status"
            label="სტატუსი"
            width="18.75rem"
            gridArea="auto / 1 / auto / 4"
            placeholder="აირჩიეთ სტატუსი"
            selected={status}
            onSelect={(item) => {
              setStatus(item);
            }}
            items={["მოსწავლე", "სტუდენტი", "კურსდამთავრებული", "სხვა"]}
          />

          {status === "მოსწავლე" || status === "სტუდენტი" ? (
            <SDivisor
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
            />
          ) : null}
        </SGridContainer>
      </SContainer>

      {status == "მოსწავლე" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AdditionalInfoSchool />
        </motion.div>
      )}
      {status == "სტუდენტი" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AdditionalInfoUniversity />
        </motion.div>
      )}

      <ScenterDiv>
        <SPrivacyCheckbox>
          <Checkbox
            id="accept"
            name="accept"
            label="ვეთანხმები მოხმარების წესებსა და კონფიდენციალურობის პოლიტიკას"
            isChecked={didAccept}
            onChange={() => {
              setDidAccept(!didAccept);
            }}
          />
          <Link target={"_blank"} to="/privacy-policy">
            <SPrivacyCheckboxImg
              src="assets/svg/externalLink.svg"
              alt="externalLink"
            />
          </Link>
        </SPrivacyCheckbox>

        <Button width="21.25rem" margin="2.5rem 0">
          რეგისტრაცია
        </Button>
        <SAuthenticationText>
          უკვე გაქვს ანგარიში?
          <SAuthenticationLink to="/authentication">
            გაიარე ავტორიზაცია
          </SAuthenticationLink>
        </SAuthenticationText>
      </ScenterDiv>
      <SRegistrationSvgs>
        <SStarLeftTop
          src="assets/svg/RStarLeftBottom.svg"
          alt="StarLeftBottom"
        />
        <SStarLeftBottom
          src="assets/svg/RStarLeftTop.svg"
          alt="StarLeftTop"
          layout
        />
        <SVectorRight
          src="assets/svg/RVectorRight.svg"
          alt="VectorRight"
          layout
        />
      </SRegistrationSvgs>
    </SRegistrationMainDiv>
  );
};
