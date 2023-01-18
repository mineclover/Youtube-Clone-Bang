import React from 'react';
import CommentHeader from './CommentHeader';
import Commentlist from './CommentList';
import styles from './Comments.module.scss';

type Props = {};

const Comments = (props: Props) => {
  return (
    <div id="comments">
      <CommentHeader />
      <Commentlist />
    </div>
  );
};

export default Comments;
