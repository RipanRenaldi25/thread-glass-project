/* eslint-disable react/forbid-prop-types */
import { object } from 'prop-types';
import React from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncAddCommentToThread } from '../state/usersThread/Action';
import {
  getTotalVote, parseDate, removeTags,
} from '../utils/utils';
import CommentList from './CommentList';
// import { getTotalVote } from '../utils/utils';

function Detail({ detail }) {
  const [commentValue, onChangeCommentValue] = useInput();
  const dispatch = useDispatch();
  if (detail.id === undefined) {
    return null;
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(asyncAddCommentToThread({ threadId: detail.id, content: commentValue }));
  };
  return (
    <div>
      <div className="border overflow-hidden inline px-1 py-1 rounded-sm text-center">
        #
        {detail.category}
      </div>
      <h1 className="mt-8 text-2xl mb-5">{detail.title}</h1>
      <p className="w-10/12 mb-4">{removeTags(detail.body)}</p>
      <div className="flex">
        <div className="basis-10 flex items-center">
          <button type="button">
            <FaThumbsUp />
          </button>
          <span className="ml-1">{getTotalVote(detail.upVotesBy)}</span>
        </div>
        <div className="basis-10 flex items-center">
          <button type="button">
            <FaThumbsDown />
          </button>
          <span className="ml-1">{getTotalVote(detail.downVotesBy)}</span>
        </div>
        <div className="mr-2">
          {parseDate(detail.createdAt)}
        </div>
        <div className="flex">
          <img src={detail.owner.avatar} alt="avatar" className="w-6 rounded-full mr-1" />
          <p>
            Created By
            {' '}
            {detail.owner.name}
          </p>
        </div>

      </div>
      <form className="comment mt-6" onSubmit={onSubmitHandler}>
        <h2 className="mb-2 text-sm">Give a Comment</h2>
        <textarea type="text" className="w-11/12 h-16 border bg-[rgba(255,255,255,.1)] p-1.5 placeholder:text-sm rounded-sm" value={commentValue} onChange={onChangeCommentValue} />
        <button type="submit" className="block border w-11/12 rounded-sm mt-1">Send</button>
      </form>
      <div className="total-comment mt-6">
        <h1 className="mb-2">
          Comment (
          {getTotalVote(detail.comments)}
          )
        </h1>
        <CommentList comments={detail.comments} />
      </div>
    </div>
  );
}

export default Detail;
Detail.propTypes = {
  detail: object.isRequired,
};
