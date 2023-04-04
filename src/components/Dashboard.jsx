import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation';
import Profile from './Profile';
import { asyncGetUserProfile } from '../state';

function Dashboard() {
  const dispatch = useDispatch();
  const { profile } = useSelector((states) => states);
  useEffect(() => {
    dispatch(asyncGetUserProfile());
  }, []);
  return (
    <div className="w-[25%] bg-[#393053] bg-opacity-40 min-h-[80vh] py-10 relative">
      <div className="dashboard flex justify-center items-center flex-col">
        <Profile image={profile && profile.user.avatar} name={profile && profile.user.name} />
        <Navigation />
      </div>
    </div>
  );
}

export default Dashboard;
