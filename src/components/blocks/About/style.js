import styled from "styled-components";
import { Container } from "/src/components/styled";

const AboutSectionView = styled.section`
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 0)};
  background: ${({ theme }) => theme.color.accent};
`;

const AboutContainerView = styled(Container)`
  min-height: 600px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const AboutTextBlockView = styled.div`
  padding-top: 183px;
  padding-right: 100px;
  padding-bottom: 30px;
  margin-right: 116px;
  box-sizing: border-box;
  width: 637px;
`;

const AboutImageBlockView = styled.div`
  width: 446px;
  display: flex;
  align-items: flex-end;
  svg {
    max-width: 100%;
  }
`;

export {
  AboutSectionView,
  AboutContainerView,
  AboutTextBlockView,
  AboutImageBlockView
};
