import React from "react";

import { ReactComponent as LogoImg } from "/src/assets/logo.svg";
import routesData from "/src/mocks/routesData";

import { LogoView, LogoImgBlockView, LogoTextView } from "./style";

function Logo() {
  return (
    <LogoView to={routesData.MAIN}>
      <LogoImgBlockView>
        <LogoImg />
      </LogoImgBlockView>
      <div>
        <LogoTextView>Фермерские продукты</LogoTextView>
      </div>
    </LogoView>
  );
}

export default Logo;
