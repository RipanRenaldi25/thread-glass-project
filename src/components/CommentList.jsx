/* eslint-disable react/forbid-prop-types */
import { array } from 'prop-types';
import React from 'react';
import CommentItem from './CommentItem';

function CommentList({ comments }) {
  if (comments.length === 0) {
    return null;
  }
  return (
    <div>
      <div className="header w-11/12">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            content={comment.content}
            createdAt={comment.createdAt}
            downVotesBy={comment.downVotesBy}
            upVotesBy={comment.upVotesBy}
            owner={comment.owner}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentList;
CommentList.propTypes = {
  comments: array.isRequired,
};
