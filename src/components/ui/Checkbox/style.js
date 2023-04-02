import { P } from "/src/components/styled/";
import styled from "styled-components";

const CheckboxView = styled.label`
  padding-right: 44px;
  display: flex;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    position: absolute;
    top: 2px;
    right: 0;
    ${({ theme, checked }) => `
      background: ${checked ? theme.color.highlight : theme.color.neutral};
      border: ${theme.border.main};
    `}
  }
  &::after {
    content: "";
    width: 16px;
    height: 11px;
    position: absolute;
    top: 5px;
    right: 4px;
    transform: rotate(-45deg);
    ${({ theme, checked }) => `
      display: ${checked ? "block" : "none"};
      border: 2px solid ${theme.color.contrast};
    `}
    border-top: none;
    border-right: none;
    box-sizing: border-box;
  }
`;

const LabledCheckboxView = styled(P)``;

export { CheckboxView, LabledCheckboxView };
