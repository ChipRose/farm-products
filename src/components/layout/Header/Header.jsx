import React from "react";

import Logo from "/src/components/ui/Logo/Logo";
import Nav from "/src/components/layout/Nav/Nav";

import { HeaderView, HeaderContainerView } from "./style";

function Header() {
  return (
    <HeaderView>
      <HeaderContainerView>
        <Logo />
        <Nav />
      </HeaderContainerView>
    </HeaderView>
  );
}

export default Header;
