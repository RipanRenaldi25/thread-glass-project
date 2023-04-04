/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FaRocketchat, FaSignOutAlt } from 'react-icons/fa';
import { HiChartBar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unSetAuthUser } from '../state/users/Action';

function Navigation() {
  const dispatch = useDispatch();
  return (
    <div className="w-2/3 mt-10">
      <div className="mb-5">
        <Link to="/">
          <FaRocketchat className="text-2xl inline-block mr-4 text-[rgba(255,255,255,.7)]" />
          <span className="text-sm">Threads</span>
        </Link>
      </div>
      <div>
        <Link to="/leaderboard">
          <HiChartBar className="text-2xl inline-block mr-4 text-[rgba(255,255,255,.7)]" />
          <span className="text-sm">LeaderBoards</span>
        </Link>
      </div>
      <div onClick={() => dispatch(unSetAuthUser())} className="mt-5">
        <Link to="/">
          <FaSignOutAlt className="text-2xl inline-block mr-4 text-[rgba(255,255,255,.7)]" />
          <button type="button" className="text-sm">Logout</button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
