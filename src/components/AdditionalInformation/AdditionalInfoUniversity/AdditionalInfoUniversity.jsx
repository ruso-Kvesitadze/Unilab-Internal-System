import React, { useState } from "react";
import { Input } from "../../Inputs/Input";
import { Dropdown } from "../../Inputs/Dropdown";
import { RadioInput } from "../../Inputs/RadioInput";

import {
  SAdditionalInfoUniversity,
  SAdditionalInformationText,
  SAdditionalInfoUniversityContainer,
  SAdditionalInfoUniversityGrid,
  SRadioWrapper,
} from "./AdditionalInfoUniversity.styled";
export const AdditionalInfoUniversity = () => {
  const [universityName, setUniversityName] = useState("");
  const [faculty, setFaculty] = useState("");
  const [program, setProgram] = useState("");
  const [degree, setDegree] = useState("");
  const [semester, setSemester] = useState("");

  return (
    <SAdditionalInfoUniversity>
      <SAdditionalInformationText>
        გთხოვთ, მოგვაწოდოთ დამატებითი ინფორმაცია
      </SAdditionalInformationText>
      <SAdditionalInfoUniversityContainer>
        <SAdditionalInfoUniversityGrid>
          <Dropdown
            label="უნივერისტეტის დასახელება"
            width="18.75rem"
            placeholder="აირჩიე უნივერსიტეტი"
            selected={universityName}
            onSelect={(item) => {
              setUniversityName(item);
            }}
            items={[""]}
          />
          <Input
            id="faculty"
            type="text"
            name="schoolNumber"
            label="ფაკულტეტი"
            width="18.75rem"
            placeholder="ფაკულტეტის დასახელება"
            value={faculty}
            onChange={(e) => {
              setFaculty(e.target.value);
            }}
          />
          <Input
            id="program"
            type="text"
            name="schoolNumber"
            label="პროგრამა"
            width="18.75rem"
            placeholder="პროგრამის დასახელება"
            value={program}
            onChange={(e) => {
              setProgram(e.target.value);
            }}
          />
          <SRadioWrapper>
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
          </SRadioWrapper>
          <Dropdown
            label="სემესტრი"
            width="5.5rem"
            placeholder=""
            selected={semester}
            onSelect={(item) => {
              setSemester(item);
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
        </SAdditionalInfoUniversityGrid>
      </SAdditionalInfoUniversityContainer>
    </SAdditionalInfoUniversity>
  );
};
