import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ThreadList from '../components/ThreadList';
import { asyncFetchAllUsers, asyncGetThread } from '../state';

function HomePage() {
  const dispatch = useDispatch();
  const { threads: { threads }, users: { users } } = useSelector((states) => states);
  useEffect(() => {
    dispatch(asyncGetThread());
    dispatch(asyncFetchAllUsers());
  }, []);
  return (
    <div className="px-10 py-10 w-full relative">
      <h1 className="mb-10 after:contents-[''] after:w-44 after:h-3 after:bg-gradient-to-br after:from-[#635985] after:to-[#443C68] after:bg-opacity-80 after:block after:rounded-xl text-2xl">Active Threads</h1>
      <Link to="/newthread" className="absolute top-10 right-10 flex items-center border px-1.5 py-1 rounded-lg hover:bg-[rgba(255,255,255,.2)] transition-all">
        <h1>Add Discussion</h1>
      </Link>
      <ThreadList threads={threads} users={users} />
    </div>
  );
}

export default HomePage;
