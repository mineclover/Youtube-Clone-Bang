import React from 'react';
import Navigation from './Navigation';
import AppLogo from './AppLogo';
import styles from './header.module.scss';

export type LeftProps = {
  wide: boolean;
  setWide: (wide: boolean) => void;
};

const Left = (props: LeftProps) => {
  return (
    <div className={styles.areaComponent}>
      <Navigation wide={props.wide} setWide={props.setWide} />
      <AppLogo />
      <span id="country-code">KR</span>
    </div>
  );
};

export default Left;
