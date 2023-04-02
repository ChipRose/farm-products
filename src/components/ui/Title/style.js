import styled, { css } from "styled-components";
import theme from "/src/theme/theme";

const TitleSize = {
  BIG: { fz: theme.fontSize.mainTitle, lh: theme.lineHeight.small },
  MEDIUM: { fz: theme.fontSize.bigTitle, lh: theme.lineHeight.small },
  SMALL: { fz: theme.fontSize.middleTitle, lh: theme.lineHeight.middle },
  EXTRA_SMALL: { fz: theme.fontSize.smallTitle, lh: theme.lineHeight.main }
};

const TitleBasic = css`
  margin: 0;
  padding: 0;
  font-weight: 700;
`;

const TitleView = styled.h2`
  ${TitleBasic}
  ${({ fontSize }) => css`
    font-size: ${fontSize ? TitleSize[fontSize]?.fz : TitleSize?.MEDIUM?.fz};
    line-height: ${fontSize ? TitleSize[fontSize]?.lh : TitleSize?.MEDIUM?.lh};
  `}
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 0)};
  text-align: ${({ align }) => align};
`;

export { TitleView };
