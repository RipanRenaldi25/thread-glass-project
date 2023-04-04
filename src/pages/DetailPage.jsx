import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import { asyncFetchDetailUserThread } from '../state';

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users: { userDetail } } = useSelector((states) => states);
  useEffect(() => {
    dispatch(asyncFetchDetailUserThread(id));
  }, []);
  return (
    <div className="w-full px-4 py-6">
      <Detail detail={userDetail} />
    </div>
  );
}

export default DetailPage;
