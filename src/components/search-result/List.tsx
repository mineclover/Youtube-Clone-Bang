import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './search.module.scss';
import useDay from '../../hooks/useDay';
import dayjs, { Dayjs } from 'dayjs';
import { videoInfo } from '../../api/axios';

type Props = {
  data: any;
};

const List = ({ data }: Props) => {
  const [videoId, setVideoId] = useState('');
  const [videoData, setVideoData] = useState([]);
  const [date, setDate] = useState<Dayjs | null>(null);

  let today = useDay(dayjs(date));

  useEffect(() => {
    const video = async () => {
      if (videoId !== undefined) {
        setVideoId(data.id.videoId);
        setDate(data.snippet.publishedAt);
      }
      try {
        const response = await videoInfo(videoId);
        if (response.status === 200) {
          setVideoData(response.data.items);
        }
      } catch (error) {
        console.log(error);
      }
    };
    video();
  }, []);

  //50글자 이상일때 잘라주는 함수
  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n) + '...' : str;
  };

  return (
    <Link to={`/video/${videoId}`} style={{ textDecoration: 'none' }}>
      <div className={styles.lists}>
        <div>
          <img
            src={data.snippet.thumbnails.high.url}
            alt="thumbnail image"
            className={styles.img}
          />
          {/* <div>{videoData.contentDetails.duration}</div> */}
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{truncate(data.snippet.title, 50)}</div>
          <div>조회수 {today}</div>
          <div className={styles.channel}>{data.snippet.channelTitle}</div>
          <img
            src={data.snippet.thumbnails.high.url}
            alt="thumbnail image"
            className={styles.miniImg}
          />
        </div>
      </div>
    </Link>
  );
};

export default List;
