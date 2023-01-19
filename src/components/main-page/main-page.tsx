import React from 'react';
import Filter from './filters';
import Videos from './videos';
import styles from './MainPage.module.scss';

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div className={styles.mainPageFrame}>
      <Filter />
      <Videos />
    </div>
  );
};

export default MainPage;
