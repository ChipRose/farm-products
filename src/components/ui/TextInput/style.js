import styled from "styled-components";
import { Input } from "/src/components/styled/";

const TextInputView = styled(Input)`
  padding: 14px 12px;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 0)};
  box-sizing: border-box;
  min-width: 100%;
  color: inherit;
  ${({ theme, fontSize, lineHeight }) => `
    font-size: ${`${fontSize}px` || theme.fontSize.small}};
    line-height: ${`${lineHeight}px` || theme.lineHeight.main};
    background: ${theme.color.neutral};
    border: ${theme.border.main};
  `}
`;

export { TextInputView };
