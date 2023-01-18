import React from 'react';
import Navigation from './Navigation';
import AppLogo from './AppLogo';
import styles from './Header.module.scss';

const Left = () => {
  return (
    <div className={styles.areaComponent}>
      <Navigation />
      <AppLogo />
      <span id="country-code">KR</span>
    </div>
  );
};

export default Left;
