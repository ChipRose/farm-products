import { Ul, P } from "/src/components/styled/";
import styled from "styled-components";

const PopupView = styled.div`
  ${({ theme }) => `
    padding: ${theme.indent};
    background: ${theme.color.contrast};
    box-shadow: ${theme.shadow.main};
  `}
  box-sizing: border-box;
  position: fixed;
  z-index: 100;
  width: 500px;
  min-height: 300px;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: translate(-50%, -50%);
`;

const PopupContentView = styled.div`
  margin-bottom: 20px;
  align-self: stretch;
  flex: 1 1 auto;
`;

const PopupShoppingListView = styled(Ul)`
  margin-bottom: 10px;
`;

const PopupItemView = styled.li`
  padding-left: 20px;
  position: relative;
  &::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.color.highlight};
  }
`;

const PopupSubtitleView = styled(P)`
  margin-bottom: 10px;
`;

const PopupPriceView = styled(P)`
  ${({ theme }) => `
    font-size: ${theme.fontSize.middle};
    line-height: ${theme.lineHeight.middle};
  `}
  font-weight: 700;
  text-align: center;
`;

export {
  PopupView,
  PopupContentView,
  PopupShoppingListView,
  PopupItemView,
  PopupSubtitleView,
  PopupPriceView
};
