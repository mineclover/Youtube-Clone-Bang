import { useEffect, useState } from 'react';
import axios from 'axios';
import data from '../../data';
import Video from './Video';

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

const RelatedVideos = () => {
  let videoId = 'iuPe-dGfCz8';
  let channelInfo = 'UCeytlvCvwXylrANAtQHmNQg';

  const [relatedVideos, setRelatedVideos] = useState({});

  const [params, setParams] = useState({
    part: 'snippet',
    channelInfo: `${channelInfo}`,
    maxResults: 2,
    relatedToVideoId: `${videoId}`,
    type: 'video',
  });

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const response = await instance.get('/search', {
    //       params,
    //     });
    //     setRelatedVideos(response.data.items);
    //   } catch (error) {
    //     console.log('안나온다구요!!!!!!!!!!!!!!!!!');
    //   }
    // }
    // fetchData();
    setRelatedVideos(data.items);
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
