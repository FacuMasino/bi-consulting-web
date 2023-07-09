import React from "react";
import { FooterContainer, FooterShape } from "./Footer.elements";

const Footer = ({ children }: { children: JSX.Element }) => {
  return (
    <FooterContainer>
      <FooterShape />
      {children}
      <div>test</div>
    </FooterContainer>
  );
};

export default Footer;
