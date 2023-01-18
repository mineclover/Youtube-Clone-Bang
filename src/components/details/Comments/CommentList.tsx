import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from './Comment';
import { commentThreads } from '../../../api/axios';
// import dayjs from 'dayjs';

type Props = {};

const videoId = 'iCdcSti70lI';

const Commentlist = (Props: Props) => {
  const [commentList, setCommentList] = useState([]);

  // commentThreads()

  // const getComments = async (videoId: string) => {
  //   const url = 'https://youtube.googleapis.com/youtube/v3/commentThreads?';
  //   let data = {
  //     params: {
  //       part: 'snippet',
  //       maxResults: 5,
  //       order: 'relevance',
  //       videoId,
  //       key: import.meta.env.VITE_API_KEY,
  //     },
  //   };
  //   const res = await axios.get(url, data);
  //   console.log('res.data: ', res.data);
  //   return res.data;
  // };

  let data = {
    params: {
      part: 'snippet',
      maxResults: 2,
      order: 'relevance',
      videoId,
      key: import.meta.env.VITE_API_KEY,
    },
  };

  useEffect(() => {
    const viewComments = async () => {
      setCommentList([]);
      try {
        const res = await commentThreads(videoId, data);
        console.log('res.items: ', res.data.items);
        setCommentList(res.data.items);
      } catch (error) {
        if (error instanceof Error) alert('조회 실패:' + error.message);
        else alert('조회실패');
      }
    };
    viewComments();
  }, []);

  return (
    <div>
      {commentList.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default Commentlist;
