import React from 'react';

import logo from '../../../assets/icons/logo.svg';

import {
  StyledLogoLink,
  ImageBlock,
} from './style';

function Logo() {
  return (
    <StyledLogoLink
      href="#"
    >
      <ImageBlock>
        <img
          src={logo}
          alt="Логотип"
        />
      </ImageBlock>
      <div>
        <span>Фермерские продукты</span>
      </div>

    </StyledLogoLink>
  );
};

export default Logo;