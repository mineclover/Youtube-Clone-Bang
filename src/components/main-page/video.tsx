import React from 'react';
import styles from './video.module.scss';

type Props = {
  value: number;
};

const video = (props: Props) => {
  return (
    <section className={styles.videoWarp}>
      <div className={styles.videoView}>{props.value}</div>
      <div className={styles.videoInfo}>
        <div className={styles.videoLogo}></div>
        <div className={styles.videoTitle}></div>
        <div className={styles.videoToggle}></div>
      </div>
      <div className={styles.channelName}></div>
      <div className={styles.videoStatus}></div>
    </section>
  );
};

export default video;
