import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Authentication } from "./views/Authentication";
import { RecoveryPassword } from "./views/RecoveryPassword";
import { Registration } from "./views/Registration/Registration";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
