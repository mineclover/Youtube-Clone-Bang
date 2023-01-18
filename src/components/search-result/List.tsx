import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './search.module.scss';

type Props = {
  data: any;
};

const List = ({ data }: Props) => {
  const [videoId, setVideoId] = useState('');
  console.log(data);

  useEffect(() => {
    if (data.id.videoId === undefined) {
      console.log('loading');
    } else {
      setVideoId(data.id.videoId);
    }
  }, []);

  return (
    <Link to={`/video/${videoId}`}>
      <div className={styles.lists}>
        <div>
          <img
            src={data.snippet.thumbnails.high.url}
            alt="thumbnail image"
            className={styles.img}
          />
        </div>
        <div>
          <div>{data.snippet.title}</div>
          <div>{data.snippet.channelTitle}</div>
        </div>
      </div>
    </Link>
  );
};

export default List;
