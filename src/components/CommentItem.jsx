/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import { array, object, string } from 'prop-types';
import React from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { getTotalVote, parseDate, removeTags } from '../utils/utils';

function CommentItem({
  content, createdAt, upVotesBy, downVotesBy, owner,
}) {
  return (
    <div className="p-2 border rounded-lg mb-2">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <img alt="avatar" className="mr-2 w-6 h-6 rounded-full" src={owner.avatar || 'https://generated-image-url.jpg'} />
          <span>{owner.name}</span>
        </div>
        <div>{parseDate(createdAt)}</div>
      </div>
      <p>{removeTags(content)}</p>
      <div className="flex mt-2">
        <div className="basis-10 flex items-center">
          <button type="button">
            <FaThumbsUp />
          </button>
          <span className="ml-1">{getTotalVote(upVotesBy)}</span>
        </div>
        <div className="basis-10 flex items-center">
          <button type="button">
            <FaThumbsDown />
          </button>
          <span className="ml-1">{getTotalVote(downVotesBy)}</span>
        </div>
      </div>
    </div>

  );
}
export default CommentItem;
CommentItem.propTypes = {
  content: string.isRequired,
  createdAt: string.isRequired,
  upVotesBy: array,
  downVotesBy: array,
  owner: object,
};
