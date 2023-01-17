import React from 'react';

type Props = {
  data: any;
};

const List = ({ data }: Props) => {
  return (
    <div>
      <div>
        <img src={data.snippet.thumbnails} alt="" />
      </div>
      <div>{data.snippet.title}</div>
    </div>
  );
};

export default List;
