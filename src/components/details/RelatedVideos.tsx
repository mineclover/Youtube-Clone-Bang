import { useEffect, useState } from 'react';
import { relatedToVideo } from '../../api/axios';
import Video from './Video';

const RelatedVideos = () => {
  let videoId = 'iuPe-dGfCz8';
  let channelInfo = 'UCeytlvCvwXylrANAtQHmNQg';

  const [relatedVideos, setRelatedVideos] = useState({});

  const data = {
    part: 'snippet',
    channelInfo: `${channelInfo}`,
    maxResults: 2,
    relatedToVideoId: `${videoId}`,
    type: 'video',
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
            return <Video key={idx} item={item} />;
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
