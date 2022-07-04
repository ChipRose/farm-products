import React from 'react';

import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';

function Header() {
  return (
    <header>
      <div>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;