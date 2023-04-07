import styled from "styled-components";
import { Container } from "/src/components/styled";

const OrderPageView = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.neutral};
  box-sizing: border-box;
  height: ${({ height }) => `${height + 80}px`};
  overflow-y: auto;
`;

const OrderContainerView = styled(Container)`
  padding: 40px 0;
  min-height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 353px auto;
  column-gap: 20px;
`;

const OrderFormWrapperView = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
`;

const OrderCatalogWrapperView = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  height: ${({ height }) => `${height}px`};
  min-height: ${({minHeight})=>`${minHeight}px`};
`;

export {
  OrderPageView,
  OrderContainerView,
  OrderFormWrapperView,
  OrderCatalogWrapperView
};
