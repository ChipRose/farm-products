import { Ul } from "/src/components/styled";
import styled from "styled-components";

const TabsListView = styled(Ul)`
  display: flex;
`;

const TabsItemView = styled.li`
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
`;

const TabsContentView = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({ theme }) => `
    font-size: ${theme.fontSize.small};
    line-height: ${theme.lineHeight.main};
  `}
  .product__desription-block {
    padding: 16px 0;
    box-sizing: border-box;
    flex: 1 1 auto;
    p {
      margin: 0;
    }
  }
  .product__price {
    padding: 4px 8px;
    margin-top: auto;
    margin-bottom: 0;
    align-self: flex-start;
    font-weight: 700;
    background: ${({ theme }) => theme.color.accent};
  }
  dl {
    padding: 16px 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
  dt {
    padding: 4px 0;
    margin: 0 8px 0 0;
    float: left;
    font-weight: 700;
  }
  dd {
    padding: 4px 0;
    margin: 0;
  }
`;

export { TabsListView, TabsItemView, TabsContentView };
