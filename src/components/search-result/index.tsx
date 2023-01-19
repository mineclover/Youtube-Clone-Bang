import React from 'react';
import SideBar from '../side-bar';
import WideSideBar from '../wide-side-bar';
import styles from '../main-page/MainPage.module.scss';
import { sideBarstate } from '../../Atom';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import List from './List';
import { search } from '../../api/axios';

type Props = {};

const index = (props: Props) => {
  const [searchData, setSearchData] = useState([]);
  const [sideBar, setSideBar] = useRecoilState(sideBarstate);

  useEffect(() => {
    const searchResult = async () => {
      try {
        const response = await search(`test`);
        if (response.status === 200) {
          setSearchData(response.data.item);
        }
      } catch (error) {
        console.log(error);
      }
    };
    searchResult();
  }, []);

  console.log(searchData);

  return (
    <div className={styles.frame}>
      {sideBar ? <WideSideBar /> : <SideBar />}
      <div>
        {Array.isArray(searchData) ? (
          searchData.map((data, index) => {
            return <List key={index} data={data} />;
          })
        ) : (
          <div>찾으시는 컨텐츠가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default index;
