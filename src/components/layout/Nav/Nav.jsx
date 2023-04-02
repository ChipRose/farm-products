import React from "react";
import { useLocation } from "react-router-dom";
import Button from "/src/components/ui/Button/Button";

import routesData from "/src/mocks/routesData";

const buttons = [
  {
    to: routesData.MAIN,
    button: (
      <Button
        width={260}
        key={routesData.MAIN}
        variant="link"
        link={routesData.MAIN}
      >
        Главная
      </Button>
    )
  },
  {
    to: routesData.ORDER,
    button: (
      <Button width={260} key={routesData.ORDER} link={routesData.ORDER}>
        Купить билет
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      {buttons.filter(({ to }) => to !== pageUrl).map(({ button }) => button)}
    </nav>
  );
}

export default Nav;
