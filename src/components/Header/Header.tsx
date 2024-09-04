import React from 'react';

import { useScreenConfig } from '../../contexts/ScreenConfigContext';
import HeaderDefault from './HeaderDefault';
import HeaderMobile from './HeaderMobile';
import * as styles from './styles';

const Header = () => {
  const { isMobile } = useScreenConfig();

  return (
    <div>
      <styles.HeaderGlass />
      {isMobile ? <HeaderMobile /> : <HeaderDefault />}
    </div>
  );
};

export default Header;
