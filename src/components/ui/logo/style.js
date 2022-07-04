import styled from 'styled-components';

const StyledLogoLink = styled.a`
  min-height: 44px;
  display: flex;
  align-items: center;
  font-size:  ${(props)=>props.theme.logoFontSize.size};
  line-height: ${(props)=>props.theme.logoFontSize.line};
  font-weight: 700;
  color: ${(props)=>props.theme.txtColor.main};
  text-decoration: none;
  transition: opacity 0.3s ease-in;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledImageBlock = styled.div`
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    object-fit: contain;
  }
`;

const ImageBlock = styled(StyledImageBlock)`
  margin-right: 20px;
`;

export {
  StyledLogoLink,
  ImageBlock
};