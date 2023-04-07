import styled from "styled-components";

const ProductCardView = styled.div`
  padding: 20px;
  box-sizing: border-box;
  min-height: 288px;
  display: flex;
  overflow: hidden;
  background: ${({ theme }) => theme.color.contrast};
  border: 1px solid ${({ theme }) => theme.color.neutralDark};
`;

const ProductCardImageBlockView = styled.div`
  margin-right: 20px;
  flex: 0 0 248px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    height: 100%;
    object-fit: contain;
  }
`;
const ProductCardTextBlockView = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export { ProductCardView, ProductCardImageBlockView, ProductCardTextBlockView };
