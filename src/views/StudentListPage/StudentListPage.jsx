import React from "react";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { Table } from "../../components/Table";
import { studentData } from "../../data";
import { SContentWrapper, STitle } from "./StudentListPage.styled";
import { columns } from "./columns";

export const StudentListPage = () => {
  return (
    <div>
      <FourthHeader />
      <SContentWrapper>
        <STitle>სტუდენტების სია</STitle>
        <Table columns={columns} data={studentData} />
      </SContentWrapper>
    </div>
  );
};
