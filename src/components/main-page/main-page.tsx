import React from 'react';
import Filter from './filters';
import VideoContainer from './video-container';

type Props = {};

const MainPage = (props: Props) => {
  return (
    <>
      <Filter />
      <VideoContainer />
    </>
  );
};

export default MainPage;
