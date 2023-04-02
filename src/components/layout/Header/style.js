import styled from "styled-components";
import { Container } from "/src/components/styled";

const HeaderView = styled.header`
  min-height: 80px;
  ${({ theme }) => `
    background: ${theme.color.contrast};
    box-shadow: ${theme.shadow.light};
  `}
`;

const HeaderContainerView = styled(Container)`
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: inherit;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { HeaderView, HeaderContainerView };
