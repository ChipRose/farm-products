import React from "react";

import Logo from "/src/components/ui/Logo/Logo";
import Copyright from "/src/components/ui/Copyright/Copyright";

import { FooterView, FooterContainerView } from "./style";

function Footer() {
  return (
    <FooterView>
      <FooterContainerView>
        <Logo />
        <Copyright />
      </FooterContainerView>
    </FooterView>
  );
}

export default Footer;
