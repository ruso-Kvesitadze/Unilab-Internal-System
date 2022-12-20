import React, { useState } from "react";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";

export const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <h3>გამარჯობა 👋</h3>
        <p>უნილაბის სამართავ პანელში მოსახვედრად, გთხოვთ გაიაროთ ავტორიზაცია</p>
        <Input
          id="email"
          type="text"
          name="email"
          label="ელ-ფოსტა"
          placeholder="info@unilab.ge"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <PasswordInput
          id="email"
          name="email"
          label="პაროლი"
          placeholder="***************"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
    </div>
  );
};
