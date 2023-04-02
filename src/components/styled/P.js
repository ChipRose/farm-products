import styled from "styled-components";

const P = styled.p`
  margin: 0 0 ${({ mb }) => (mb ? `${mb}` : 0)};
  padding: 0;
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSize.main};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight || theme.lineHeight.main};
  text-align: ${({ align }) => align || "left"};
  &:last-child {
    margin-bottom: 0;
  }
`;

export default P;
