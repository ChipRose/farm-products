import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme/theme';

function ContextWrapper ({children}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default ContextWrapper;