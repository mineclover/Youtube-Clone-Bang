import React from 'react';
import SideBar from '../side-bar';
import WideSideBar from '../wide-side-bar';
import styles from './MainPage.module.scss';
import { sideBarstate } from '../../Atom';
import { useRecoilState } from 'recoil';

type Props = {};

const index = (props: Props) => {
  const [sideBar, setSideBar] = useRecoilState(sideBarstate);
  return (
    <div className={styles.frame}>
      {sideBar ? <WideSideBar /> : <SideBar />}
      main-pages
    </div>
  );
};

export default index;
