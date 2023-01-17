import React from 'react';
import ContentHeader from './ContentHeader';
import Contents from './Contents';

type Props = {};

const Comments = (props: Props) => {
  return (
    <div id="comments">
      <ContentHeader />
      <Contents />
    </div>
  );
};

export default Comments;
