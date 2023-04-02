import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoView = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transition.main};
  &:hover {
    opacity: 0.8;
  }
`;

const LogoImgBlockView = styled.div`
  width: 44px;
  height: 44px;
  margin-right: 24px;
  img {
    max-width: 100%;
    object-fit: contain;
  }
`;

const LogoTextView = styled.span`
  ${({ theme }) => `
    font-size: ${theme.fontSize.big};
    line-height: ${theme.lineHeight.small};
    font-weight: ${theme.fontWeight.heavy};
    color: ${theme.color.main};
  `}
`;

export { LogoView, LogoImgBlockView, LogoTextView };
