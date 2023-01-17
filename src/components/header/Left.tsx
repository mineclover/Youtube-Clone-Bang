import React from 'react';
import Navigation from './Navigation';
import AppLogo from './AppLogo';
import styles from './header.module.scss';

type Props = {};

const Left = (props: Props) => {
  return (
    <div className={styles.areaComponent}>
      <Navigation />
      <AppLogo />
      <span id="country-code">KR</span>
    </div>
  );
};

export default Left;
