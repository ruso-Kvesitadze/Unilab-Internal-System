import React from "react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { SecondHeader } from "../../components/SecondHeader";
import {
  SPrivacyPolicyView,
  SPrivacyPolicy,
  STitle,
  SPreRegistrationSection,
  SButton,
} from "./PrivacyPolicy.styled";
export const PrivacyPolicy = () => {
  return (
    <SPrivacyPolicyView>
      <SecondHeader />
      <SPrivacyPolicy>
        <STitle>გამარჯობა 👋</STitle>
        <SPreRegistrationSection>
          <h5>გთხოვთ, გაეცნოთ საიტის მოხმარების წესებსა და პირობებს</h5>
          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              inventore sint soluta repudiandae consequuntur, quasi dolorem et
              ab odit, provident natus vel iste quibusdam temporibus? Totam
              soluta rerum adipisci inventore?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              ratione repellat autem quisquam. Perspiciatis adipisci perferendis
              dolores, distinctio ut molestias debitis aut ullam commodi
              blanditiis est totam quasi quidem cum.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ut
              reiciendis rerum, vero veniam consequatur numquam quisquam quidem
              molestiae, non molestias doloremque deleniti eum et sequi
              laudantium voluptatem! Molestiae, alias.
            </li>
          </ul>
        </SPreRegistrationSection>
        <SPreRegistrationSection>
          <h5>გთხოვთ, გაეცნოთ საიტის მოხმარების წესებსა და პირობებს</h5>
          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              inventore sint soluta repudiandae consequuntur, quasi dolorem et
              ab odit, provident natus vel iste quibusdam temporibus? Totam
              soluta rerum adipisci inventore?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              ratione repellat autem quisquam. Perspiciatis adipisci perferendis
              dolores, distinctio ut molestias debitis aut ullam commodi
              blanditiis est totam quasi quidem cum.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ut
              reiciendis rerum, vero veniam consequatur numquam quisquam quidem
              molestiae, non molestias doloremque deleniti eum et sequi
              laudantium voluptatem! Molestiae, alias.
            </li>
          </ul>
        </SPreRegistrationSection>
        <SButton to="/registration" width="21.25rem">
          გავეცანი
        </SButton>
      </SPrivacyPolicy>
      <Footer />
    </SPrivacyPolicyView>
  );
};
