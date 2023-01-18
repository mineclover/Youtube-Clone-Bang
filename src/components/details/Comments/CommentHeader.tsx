import React from 'react';
import styles from './Comments.module.scss';

type Props = {};

const CommentHeader = (props: Props) => {
  return (
    <div>
      <span className={styles.profileImg}>{/* <img src="" alt="프로필 이미지" /> */}</span>
      <input className={styles.commentInput} type="text" placeholder="댓글 추가..." />
    </div>
  );
};

export default CommentHeader;
