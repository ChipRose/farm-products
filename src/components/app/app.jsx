import React from 'react';

import ContextWrapper from '../context/context-wrapper';
import PageWrapper from '../layout/page-wrapper/page-wrapper';

import { GlobalStyle } from './style';

function App() {
  return (
    <ContextWrapper>
      <GlobalStyle />
      <PageWrapper />
    </ContextWrapper>
  );
};

export default App;