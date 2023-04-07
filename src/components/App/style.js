import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body {
    margin: 0 0 0 calc(100vw - 100%);
    width: 100vw;
    min-width: 1140px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    font-family: "Inter", "Arial", sans-serif;
    ${({ theme }) => `
      font-size: ${theme.fontSize.main};
      line-height: ${theme.lineHeight.main};
      font-weight: ${theme.fontWeight.main};
      color: ${theme.color.main};
      background: ${theme.color.contrast};
    `}
  }

  .app-wrapper {
    flex: 1 1 auto; 
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export { GlobalStyle };
