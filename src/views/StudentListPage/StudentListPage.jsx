import React from "react";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { Table } from "../../components/Table";
import { studentData } from "../../data";
import {
  SContentWrapper,
  STitle,
  SActionWrapper,
} from "./StudentListPage.styled";
import { columns } from "./columns";
import { Input } from "../../components/Inputs/Input";
import { Button } from "../../components/Button";
import { useState } from "react";

export const StudentListPage = () => {
  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <div>
      <FourthHeader />
      <SContentWrapper>
        <STitle>სტუდენტების სია</STitle>
        <SActionWrapper>
          <Button
            secondary
            width="11.875rem"
            LeftComponent={<img src="assets/svg/filter.svg" />}
          >
            ფილტრი
          </Button>
          <Input
            width="16.25rem"
            LeftComponent={<img src="assets/svg/search.svg" />}
            value={globalFilter}
            onChange={(e) => {
              setGlobalFilter(e.target.value);
            }}
          />
        </SActionWrapper>
        <Table
          columns={columns}
          data={studentData}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </SContentWrapper>
    </div>
  );
};
