import React from 'react';
import ContentHeader from './ContentHeader';

type Props = {};

const index = (props: Props) => {
  return (
    <div id="contentContainer">
      <div id="wrapper">
        <ContentHeader />
        <div id="inner-content">
          {/* 컴포넌트화 시키기 */}
          {/* <section>
            <div id="items"></div>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default index;
