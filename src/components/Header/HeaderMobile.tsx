import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as styles from './styles';

const HeaderMobile = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleDropdownMenuItemClick = (id: string) => {
    switch (id) {
      case 'home':
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    setTimeout(() => setIsMenuOpened(false), 200);
  };

  return (
    <>
      <styles.HeaderContainer>
        <styles.HeaderMenuContainer>
          <Link to={'/'}>
            <styles.HeaderMenuItem id="item-1">
              <h2>BOILERPLATE</h2>
            </styles.HeaderMenuItem>
          </Link>

          <styles.HeaderMenuItem onClick={() => setIsMenuOpened((prev) => !prev)}>
            <h2>{isMenuOpened ? 'Close' : 'Menu'}</h2>
          </styles.HeaderMenuItem>
        </styles.HeaderMenuContainer>

        {isMenuOpened && (
          <styles.DropdownMenuContainer>
            <styles.DropdownMenuItem id="home" onClick={(e) => handleDropdownMenuItemClick(e.currentTarget.id)}>
              <h2>home</h2>
            </styles.DropdownMenuItem>

            <styles.DropdownMenuItem id="home" onClick={(e) => handleDropdownMenuItemClick(e.currentTarget.id)}>
              <h2>home</h2>
            </styles.DropdownMenuItem>

            <styles.DropdownMenuItem id="home" onClick={(e) => handleDropdownMenuItemClick(e.currentTarget.id)}>
              <h2>home</h2>
            </styles.DropdownMenuItem>

            <styles.DropdownMenuItem id="home" onClick={(e) => handleDropdownMenuItemClick(e.currentTarget.id)}>
              <h2>home</h2>
            </styles.DropdownMenuItem>
          </styles.DropdownMenuContainer>
        )}
      </styles.HeaderContainer>
    </>
  );
};

export default HeaderMobile;
