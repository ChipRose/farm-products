import { Ul } from "/src/components/styled";
import styled from "styled-components";

const FeatureListView = styled(Ul)`
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 0)};
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
`;

const FeatureItemView = styled.li`
  margin-right: 20px;
  margin-bottom: 20px;
  flex: 0 0 calc(50% - 20px);
  &:nth-child(2n) {
    margin-right: 0;
  }
`;

export { FeatureListView, FeatureItemView };
