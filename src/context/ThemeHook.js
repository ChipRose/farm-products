import { ThemeProvider } from "styled-components";
import theme from "/src/theme/theme";

function ThemeHook({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeHook;
