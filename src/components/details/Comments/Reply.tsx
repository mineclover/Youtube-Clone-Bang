// import React, { useEffect, useState } from 'react';
// // import { commentThreads, replyThreads } from '../../../api/axios';

// type Props = {
//   reply: any;
// };

// const Reply = ({ reply }: Props) => {
//   const [replies, setReplies] = useState('');
//   const text = reply.snippet.topLevelComment.snippet.textDisplay;
//   const replyCount = reply.snippet.totalReplyCount;

//   const data = {
//     part: 'replies',
//     maxResults: 5,
//     order: 'relevance',
//     id: 'Ugy8BVQLNUsd_s4hYa94AaABAg',
//   };

//   useEffect(() => {
//     // handleReply();
//   }, [replies]);
//   const handleReply = async () => {
//     const res = await replyThreads({ data });
//     console.log('res.data: ', res.data);
//     console.log(res.data.items[0].replies.comments);
//     setReplies(res.data.items[0].replies.comments.snippet);
//   };

//   return (
//     <>
//       <div className="reply">
//         {replyCount ? <button onClick={handleReply}>답글 {replyCount}개</button> : ''}
//       </div>
//       <div>{replies}</div>
//     </>
//   );
// };

// export default Reply;
