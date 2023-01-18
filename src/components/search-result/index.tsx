import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import List from './List';
import { instance } from '../../api/axios';

type Props = {};

const index = (props: Props) => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const searchResult = async () => {
      try {
        const response = await instance.get(`/search?part=snippet&maxResults=10&q={animal}`);
        if (response.status === 200) {
          setSearchData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    searchResult();
  }, []);

  console.log(searchData);

  return (
    <div>
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
