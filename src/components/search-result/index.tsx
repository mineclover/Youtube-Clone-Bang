import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import List from './List';
import styles from './search.module.scss';
import { search } from '../../api/axios';

type Props = {};

const keyword = 'puppy';

const index = (props: Props) => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const searchResult = async () => {
      try {
        const response = await search(keyword);
        if (response.status === 200) {
          setSearchData(response.data.items);
        }
      } catch (error) {
        console.log(error);
      }
    };
    searchResult();
  }, []);

  return (
    <div className={styles.container}>
      {Array.isArray(searchData) ? (
        searchData.map((data, index) => {
          return <List key={index} data={data} />;
        })
      ) : (
        <div>찾으시는 컨텐츠가 없습니다.</div>
      )}
    </div>
  );
};

export default index;
