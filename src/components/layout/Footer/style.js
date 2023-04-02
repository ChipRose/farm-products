import styled from "styled-components";
import { Container } from "/src/components/styled";

const FooterView = styled.footer`
  min-height: 80px;
  ${({ theme }) => `
    background: ${theme.color.contrast};
    border-top: ${theme.border.secondary};
  `}
`;

const FooterContainerView = styled(Container)`
  padding-top: 18px;
  padding-bottom: 18px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { FooterView, FooterContainerView };
