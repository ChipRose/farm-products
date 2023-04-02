import styled from "styled-components";

import { Container } from "/src/components/styled";

const FeaturesSectionView = styled.section`
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 0)};
`;

const FeaturesContainerView = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { FeaturesSectionView, FeaturesContainerView };
