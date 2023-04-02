import styled, { css } from "styled-components";

const FeatureBackground = css`
  background: ${({ isPositive, theme }) =>
    isPositive ? theme.color.positive : theme.color.negative};
`;

const FeatureBackgroundSticker = css`
  background: ${({ isPositive, theme }) =>
    isPositive ? theme.color.positiveDark : theme.color.negativeDark};
`;

const FeatureShadow = css`
  box-shadow: 0 0 0 3px
    ${({ isPositive, theme }) =>
      isPositive ? theme.color.positiveDark : theme.color.negativeDark};
`;

const FeatureCardView = styled.article`
  ${FeatureBackground}
  min-height: 201px;
  padding: 20px;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease-in;
  &:hover,
  &:focus {
    ${FeatureShadow}
  }
`;

const TopFeatureCardView = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const FeatureCardImageBlockView = styled.div`
  margin-right: 20px;
  svg {
    width: 52px;
    height: 52px;
    object-fit: contain;
  }
`;

const FeatureCardStickerView = styled.span`
  ${FeatureBackgroundSticker}
  padding: 2px 10px;
  margin-bottom: 4px;
  display: inline-block;
  ${({ theme }) => `
    color: ${theme.color.contrast};
    font-size: ${theme.fontSize.small};
    line-height: ${theme.lineHeight.main};
  `}
`;

export {
  FeatureCardView,
  TopFeatureCardView,
  FeatureCardImageBlockView,
  FeatureCardStickerView
};
