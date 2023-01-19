import React from 'react';
import { Link } from 'react-router-dom';
import styles from './wideSideBar.module.scss';
import Item11 from './Item11';
import Item2 from './Item2';
import Item3 from './Item3';

type Props = {};

const WideSideBar = (props: Props) => {
  return (
    <div className={styles.sideBarContainerWrapper}>
      <div id="side-bar-contianer" className={styles.sideBarContainer}>
        <Item11></Item11>
        <Item11></Item11>
        <Item11></Item11>
        <Item2></Item2>
        <Item3></Item3>
      </div>
    </div>
  );
};

export default WideSideBar;
