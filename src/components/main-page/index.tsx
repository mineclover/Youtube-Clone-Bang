import React from 'react';
import SideBar from '../side-bar';
import styles from './MainPage.module.scss';

type Props = {};

const index = (props: Props) => {
  return (
    <div className={styles.sideBar}>
      <SideBar />
      main-pages
    </div>
  );
};

export default index;
