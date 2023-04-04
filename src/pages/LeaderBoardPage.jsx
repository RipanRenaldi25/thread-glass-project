import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchAllLeaderBoard } from '../state';

function LeaderBoardPage() {
  const dispatch = useDispatch();
  const { leaderBoard } = useSelector((states) => states);
  useEffect(() => {
    dispatch(asyncFetchAllLeaderBoard());
  }, []);

  if (!leaderBoard) {
    return null;
  }

  return (
    <div className="px-8 py-4 w-full">
      <h1 className="text-xl mt-4">LeaderBoards</h1>
      <table className="mt-8 border table-auto w-full">
        <thead className="border">
          <tr>
            <th>Name</th>
            <th>score</th>
          </tr>
        </thead>
        <tbody>
          {leaderBoard.map(({ user, score }) => (
            <tr key={user.id}>
              <td className="px-2">{user.name}</td>
              <td className="text-center">{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoardPage;
