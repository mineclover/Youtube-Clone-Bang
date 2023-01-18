import React from 'react';
import Commentlist from './CommentList';
import styles from './Comments.module.scss';

type Props = {};

const Comments = (props: Props) => {
  return (
    <div id={styles.comments}>
      <div className={styles.flex}>
        <span className={styles.profileImg}>{/* <img src="" alt="프로필 이미지" /> */}</span>
        <input className={styles.commentInput} type="text" placeholder="댓글 추가..." />
      </div>
      <Commentlist />
    </div>
  );
};

export default Comments;
