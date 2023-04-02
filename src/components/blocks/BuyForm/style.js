import { P } from "/src/components/styled/";
import styled from "styled-components";

const BuyFormTitleView = styled(P)`
  margin-bottom: 8px;
  ${({ theme }) => `
    font-size: ${theme.fontSize.small};
    line-height: ${theme.lineHeight.main};
  `}
`;

const BuyFormValueView = styled(P)`
  margin-bottom: 30px;
  font-weight: 700;
  ${({ theme }) => `
    font-size: ${theme.fontSize.middle};
    line-height: ${theme.lineHeight.small};
  `}
`;

export { BuyFormTitleView, BuyFormValueView };
