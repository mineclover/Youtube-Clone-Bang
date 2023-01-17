import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

type Props = {};

// const API_KEY = process.env.REACT_APP_API_KEY;
const videoId = 'iCdcSti70lI';

const getComments = async (videoId: string) => {
  const url = 'https://youtube.googleapis.com/youtube/v3/commentThreads?';
  let data = {
    params: {
      part: 'snippet',
      maxResults: 5,
      order: 'relevance',
      videoId,
      key: import.meta.env.VITE_API_KEY,
    },
  };
  const res = await axios.get(url, data);
  // console.log('res.data: ', res.data);
  return res.data;
};

const Contents = () => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const viewComments = async () => {
      setCommentList([]);
      try {
        const res = await getComments(videoId);
        console.log('res.items: ', res.items);
        setCommentList(res.items);
      } catch (error) {
        if (error instanceof Error) alert('조회 실패:' + error.message);
        else alert('조회실패');
      }
    };
    viewComments();
  }, []);

  const getCommentDate = () => {
    const nowDate = dayjs();
    console.log(nowDate.$d);
    return nowDate;
  };

  getCommentDate();

  return (
    <ul>
      {commentList.map((comment) => (
        <li key={comment.id}>
          <span>{comment.snippet.topLevelComment.snippet.authorDisplayName}</span>
          <span>{}</span>
          <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
        </li>
      ))}
    </ul>
  );
};

export default Contents;
