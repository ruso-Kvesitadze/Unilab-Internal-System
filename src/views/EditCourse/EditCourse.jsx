import React, { useState } from "react";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { SideBar } from "../../components/SideBar";
import { Footer } from "../../components/Footer";
import {
  SEditCourseMainDiv,
  SCourseTitle,
  SContainer,
  SGridContainer,
  SButtonContainer,
} from "./EditCourse.styled";
import { Dropdown } from "../../components/Inputs/Dropdown";
import { Button } from "../../components/Button";
export const EditCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [teachingType, setTeachingType] = useState("");

  return (
    <SEditCourseMainDiv>
      <FourthHeader />
      <SCourseTitle>სწავლების დამატება/რედაქტირება</SCourseTitle>
      <SContainer>
        <SGridContainer>
          <Dropdown
            id="courseName"
            label="მიმართულების დასახელება"
            width="18.75rem"
            placeholder="მიმართულების დასახელება"
            selected={courseName}
            onSelect={(item) => {
              setCourseName(item);
            }}
            items={["UI/UX დიზაინი", "Front End", "Back End", "PM"]}
          ></Dropdown>
          <Dropdown
            id="lecturer"
            label="ლექტორი"
            width="18.75rem"
            placeholder="ლექტორის სახელი და გვარი"
            selected={lecturer}
            onSelect={(item) => {
              setLecturer(item);
            }}
            items={["გიორგი", "გიო", "ბექა"]}
          ></Dropdown>
          <Dropdown
            id="teachingType"
            label="სწავლების ტიპი"
            width="18.75rem"
            placeholder=""
            selected={teachingType}
            onSelect={(item) => {
              setTeachingType(item);
            }}
          ></Dropdown>
        </SGridContainer>
      </SContainer>
      <SButtonContainer>
        <Button width="15rem" height={"3rem"} secondary={"secondary"}>
          გაუქმება
        </Button>
        <Button width="15rem" height={"3rem"}>
          დამატება
        </Button>
      </SButtonContainer>
      <section>
        <SideBar />
      </section>
      <Footer />
    </SEditCourseMainDiv>
  );
};
