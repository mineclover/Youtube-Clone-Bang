import React from 'react';
import Filter from './filters';
import Videos from './videos';

type Props = {};

const MainPage = (props: Props) => {
  return (
    <>
      <Filter />
      <Videos />
    </>
  );
};

export default MainPage;
