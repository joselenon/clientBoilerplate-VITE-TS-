import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as styles from './styles';

const LogoMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const HeaderDefault = () => {
  return (
    <styles.HeaderContainer>
      <styles.HeaderMenuContainer>
        <Link to={'/'}>
          <styles.HeaderMenuItem>
            <LogoMenu>
              <h2>BOILERPLATE</h2>
            </LogoMenu>
          </styles.HeaderMenuItem>
        </Link>

        <styles.HeaderMenu>
          <styles.HeaderMenuItem>
            <h2>home</h2>
          </styles.HeaderMenuItem>

          <styles.HeaderMenuItem>
            <h2>home</h2>
          </styles.HeaderMenuItem>

          <styles.HeaderMenuItem>
            <h2>home</h2>
          </styles.HeaderMenuItem>

          <styles.HeaderMenuItem>
            <h2>home</h2>
          </styles.HeaderMenuItem>
        </styles.HeaderMenu>
      </styles.HeaderMenuContainer>
    </styles.HeaderContainer>
  );
};

export default HeaderDefault;
