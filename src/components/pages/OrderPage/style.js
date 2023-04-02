import styled from "styled-components";
import { Container } from "/src/components/styled";

const StyledOrderPage = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.neutral};
  box-sizing: border-box;
  height: ${({ height }) => `${height + 80}px`};
  overflow-y: auto;
`;

const StyledOrderContainer = styled(Container)`
  padding: 40px 0;
  min-height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 353px auto;
  column-gap: 20px;
`;

const StyledOrderFormWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
`;

const StyledOrderCatalogWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  height: ${({ height }) => `${height}px`};
`;

export {
  StyledOrderPage,
  StyledOrderContainer,
  StyledOrderFormWrapper,
  StyledOrderCatalogWrapper
};
