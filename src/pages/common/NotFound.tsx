import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import styles from './NotFound.module.scss';
import notFound from './lottie/404.json';
import arrow from './lottie/arrow.json';
import { Link } from 'react-router-dom';

type Props = {};

const NotFound = (props: Props) => {
  const obj: any = useRef(null);

  const interactivity: any = {
    lottieObj: obj,
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: 'stop',
        frames: [40],
      },
      {
        position: { x: -1, y: -1 },
        type: 'loop',
        frames: [0, 40],
      },
    ],
  };

  return (
    <article className={styles.notFound}>
      <div className={styles.lottie}>
        <Lottie animationData={notFound} loop={true}></Lottie>
      </div>
      <div className={styles.textBox}>
        <p className={styles.text}>
          죄송합니다. 이 페이지를 사용할 수 없습니다.
          <br />
          다른 검색어로 검색해 보세요.
        </p>
      </div>
      <Link to="/">
        홈으로
        <Lottie animationData={arrow} interactivity={interactivity} ref={obj}></Lottie>
      </Link>
    </article>
  );
};

export default NotFound;
