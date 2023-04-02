import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ThemeHook from "/src/context/ThemeHook";
import { FeaturesHook } from "/src/context/FeaturesHook";
import { ProductsHook } from "/src/context/ProductsHook";
import { GlobalStyle } from "/src/components/App/style";
import MainPage from "/src/components/pages/MainPage/MainPage";
import OrderPage from "/src/components/pages/OrderPage/OrderPage";
import Error404Page from "/src/components/pages/Error404Page/Error404Page";
import PageWrapper from "/src/components/layout/PageWrapper/PageWrapper";
import ScrollToTop from "/src/components/ui/ScrollToTop/ScrollToTop";

import routesData from "/src/mocks/routesData";
import theme from "/src/theme/theme";

function App() {
  return (
    <ThemeHook theme={theme}>
      <FeaturesHook>
        <ProductsHook>
          <GlobalStyle />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path={routesData.MAIN} element={<PageWrapper />}>
                <Route index element={<MainPage />} />
                <Route path={routesData.ORDER} element={<OrderPage />} />
                <Route path={routesData.ERROR404} element={<Error404Page />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ProductsHook>
      </FeaturesHook>
    </ThemeHook>
  );
}

export default App;
