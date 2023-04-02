import React from "react";
import { Outlet } from "react-router-dom";

import Header from "/src/components/layout/Header/Header";
import Footer from "/src/components/layout/Footer/Footer";
import { Main } from "/src/components/styled";

function PageWrapper() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
