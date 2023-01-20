import React from 'react';
import styles from './video.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useDay from '../../hooks/useDay';
import dayjs, { Dayjs } from 'dayjs';
import { videoInfo } from '../../api/axios';

type Props = {
  data: any;
};

const video = (props: Props) => {
  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n) + '...' : str;
  };

  const data = props.data;

  return (
    <Link to={`/video/${data.id.videoId}`} className={styles.videoWarp}>
      <div className={styles.videoView}>
        <img
          src={data.snippet.thumbnails.high.url}
          alt="thumbnail image"
          className={styles.videoView}
        />
      </div>
      <div className={styles.videoInfo}>
        <div className={styles.videoLogo}>
          <img
            src={data.snippet.thumbnails.high.url}
            alt="thumbnail image"
            className={styles.videoLogo}
          />
        </div>
        <div className={styles.videoTitle}>{truncate(data.snippet.title, 50)}</div>
        <div className={styles.videoToggle}></div>
      </div>
      <div className={styles.channelName}>{data.snippet.channelTitle}</div>
      <div className={styles.videoStatus}>
        {/* <div>조회수 {today}</div>  */}
        {/* <div>{videoData.contentDetails.duration}</div> */}
      </div>
    </Link>
  );
};

export default video;
