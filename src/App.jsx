import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./views/MainPage";
import { Authentication } from "./views/Authentication";
import { PrivacyPolicy } from "./views/PrivacyPolicy";
import { RecoveryPassword } from "./views/RecoveryPassword";
import { Registration } from "./views/Registration";
import { StudentListPage } from "./views/StudentListPage";
import dayjs from "dayjs";
import "dayjs/locale/ka";

dayjs.locale("ka");

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/student-list" element={<StudentListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
