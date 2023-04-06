import leaderBoardReducer from './leaderboardReducer';
import ActionType from './ActionType';

/**
 * Test Scenario
 * Should Return initial State when its given by unknown action creator
 * should return all leaderboard when its given by "FETCH_ALL_LEADERBOARD" action creator
 */

describe('LeaderBoard reducer', () => {
  it('Should Return initial state when its given by unknown action creator', () => {
    // arrange
    const initialState = [];
    const actionCreator = { type: 'UNKNOWN ACTION' };

    // action
    const nextState = leaderBoardReducer(initialState, actionCreator);

    // assert
    expect(nextState).toEqual([]);
  });

  it('Should Return All Leaderboard sorted by score desc when its given by FETCH_ALL_LEADERBOARD action creator', () => {
    // arrange
    const initialState = [];
    const actionCreator = {
      type: ActionType.fetchAllLeaderBoard,
      payload: {
        users: [
          {
            userId: 'akdjksda',
            name: 'Ripan',
            score: 30,
          },
          {
            userId: 'akdjksda',
            name: 'Ripan Renaldi',
            score: 40,
          },
          {
            userId: 'akdjksda',
            name: 'Ripan test',
            score: 60,
          },
        ],
      },
    };

    // action
    const nextState = leaderBoardReducer(initialState, actionCreator);

    // assert
    const shouldReturned = actionCreator.payload.users.sort((a, b) => b.score - a.score);
    expect(nextState).toEqual(shouldReturned);
  });
});
