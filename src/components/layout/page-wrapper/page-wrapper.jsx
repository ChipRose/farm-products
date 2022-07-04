import React from 'react';

import Header from '../header/header';
import MainPage from '../../page/main-page/main-page';
import Footer from '../footer/footer';

function PageWrapper () {
  return (
    <>
      <Header/>
      <MainPage/>
      <Footer/>
    </>
  );
};

export default PageWrapper;