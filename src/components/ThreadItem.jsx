/* eslint-disable react/forbid-prop-types */
import { string, number, array } from 'prop-types';
import React from 'react';
import { FaThumbsUp, FaThumbsDown, FaRegCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  cutText, removeTags, parseDate, getTotalVote,
} from '../utils/utils';

// 31087B
function ThreadItem({
  title, body, category, createdAt, id, totalComments, upVotesBy, downVotesBy, owner,
}) {
  return (
    <section className="card bg-[rgba(255,255,255,.07)] w-full mb-3 rounded-lg p-4 shadow-md shadow-[rgba(255,255,255,.1)] text-sm hover:bg-[rgba(255,255,255,.2)] cursor-pointer transition-all">
      <Link to={`/detail/${id}`}>
        <div className="border overflow-hidden inline px-1 py-1 rounded-sm text-center">
          #
          {category}
        </div>
        <h1 className="text-lg my-2">{title}</h1>
        <p className="mb-3">{cutText(removeTags(body))}</p>
        <div className="flex">
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
          <div className="basis-10 flex items-center">
            <FaRegCommentDots />
            <span className="ml-1">{totalComments}</span>
          </div>
          <div className="mr-2">
            {parseDate(createdAt)}
          </div>
          <div>
            <p>
              Created By
              {' '}
              {/* {userDetail.owner !== undefined && userDetail.owner.name} */}
              {owner}
            </p>

          </div>

        </div>
      </Link>
    </section>
  );
}

export default ThreadItem;
ThreadItem.propTypes = {
  title: string.isRequired,
  body: string.isRequired,
  category: string.isRequired,
  createdAt: string.isRequired,
  id: string.isRequired,
  totalComments: number.isRequired,
  upVotesBy: array.isRequired,
  downVotesBy: array.isRequired,
  owner: string.isRequired,
};
