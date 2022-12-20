import React, { useState } from "react";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Checkbox } from "../../components/Checkbox/Checkbox";

export const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);

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
          id="password"
          name="password"
          label="პაროლი"
          placeholder="***************"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Checkbox
          id="remember"
          name="remember"
          label="დამიმახსოვრე"
          isChecked={shouldRemember}
          onChange={() => {
            setShouldRemember(!shouldRemember);
          }}
        />
      </form>
    </div>
  );
};
