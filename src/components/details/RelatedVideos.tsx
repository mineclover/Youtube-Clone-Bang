import { useEffect, useState } from 'react';
import { relatedToVideo } from '../../api/axios';
import { Link } from 'react-router-dom';
import Video from './Video';

type Props = {
  videoId: string;
};

const RelatedVideos = ({ videoId }: Props) => {
  const [relatedVideos, setRelatedVideos] = useState({});

  const data = {
    maxResults: 2,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await relatedToVideo(videoId, data);
        setRelatedVideos(response.data.items);
      } catch (error) {
        console.log('에러가 발생했습니다.');
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{ width: '402px' }}>
      <ul>
        {Array.isArray(relatedVideos) ? (
          relatedVideos.map((item, idx) => {
            return (
              <Link to={'/video/' + item.id.videoId}>
                <Video key={idx} item={item} />
              </Link>
            );
          })
        ) : (
          <div>
            <h4>관련 영상이 없습니다.</h4>
          </div>
        )}
      </ul>
    </div>
  );
};

export default RelatedVideos;
