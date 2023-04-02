import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const BasicStyledButton = css`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  border: none;
  text-decoration: none;
  transition: all ${({ theme }) => theme.transition.main};
  cursor: pointer;
`;

const MainButton = css`
  min-width: ${({ width }) => (width ? `${width}px` : "100%")};
  min-height: 60px;
  padding: 16.5px;
  font-weight: 700;
  ${({ theme }) => `
    font-size: ${theme.fontSize.main};
    color: ${theme.color.contrast};
    background: ${theme.color.highlight};
  `}
  &:hover {
    box-shadow: 0 4px 0 0 ${({ theme }) => theme.color.shadow} inset;
  }
  &:active {
    box-shadow: none;
    background: ${({ theme }) => theme.color.highlightDark};
  }
  &:disabled {
    background: ${({ theme }) => theme.color.disabled};
  }
`;

const TabButton = css`
  min-height: 37px;
  padding: 8px 12px;
  ${({ theme, active }) => `
    font-size: ${theme.fontSize.small};
  color: ${active ? theme.color.contrast : theme.color.main};
  background: ${active ? theme.color.active : theme.color.neutral};
  border: ${theme.border.main};
  `}

  &:hover {
    box-shadow: 0 -4px 0 0 ${({ theme }) => theme.color.shadow} inset;
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background: ${({ theme }) => theme.color.disabled};
  }
`;

const LinkButton = css`
  min-height: 37px;
  padding: 8px 0;
  color: ${({ theme }) => theme.color.main};
  :hover {
    text-decoration: underline;
  }
`;

const ButtonView = styled(Link)`
  ${BasicStyledButton};
  ${({ variant }) => {
    switch (variant) {
      case "tab":
        return TabButton;
      case "link":
        return LinkButton;
      default:
        return MainButton;
    }
  }};
`;

export { ButtonView };
