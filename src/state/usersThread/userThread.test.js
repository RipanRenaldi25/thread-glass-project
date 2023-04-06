import ActionType from './ActionType';
import usersThreadReducer from './usersThreadReducer';

/**
 * Test case Scenario for users state
 * Should Return initialState when its given by unknown action creator
 * should return all of users when its given by fetch all users action creator
 *
 * Test case scenario for userDetail state
 * Should return initialState when its given by unknown action creator
 * should return detailThread when its given by fetch_detail_user_thread action
 */
describe('User Thread Reducer', () => {
  it('Should Return initialState when its given by unknown action creator', () => {
    // arrange
    const initialState = {
      users: [],
    };
    const actionCreator = { type: 'UNKNOWN ACTION' };

    // action
    const nextState = usersThreadReducer(initialState, actionCreator);

    // assert
    expect(nextState).toEqual({ users: [] });
  });
  it('should return all of users when its given by fetch all users action creator', () => {
    // arrange
    const initialState = {
      users: [],
    };
    const actionCreator = {
      type: ActionType.fetchAllUsers,
      payload: {
        users: [
          {
            name: 'ripan',
          },
          {
            name: 'ripan2',
          },
          {
            name: 'ripan3',
          },
        ],
      },
    };

    // action
    const nextState = usersThreadReducer(initialState, actionCreator);

    // assert
    expect(nextState).toEqual(actionCreator.payload);
  });
  it('Should return initialState when its given by unknown action creator', () => {
    // arrange
    const initialState = {
      userDetail: {},
    };
    const actionCreator = { type: 'UNKNOWN_actionCreator' };

    // action
    const nextState = usersThreadReducer(initialState, actionCreator);

    // assert
    expect(nextState).toEqual(initialState);
  });
  it('should return detailThread when its given by fetch_detail_user_thread action', () => {
    // arrange
    const initialState = {
      userDetail: {},
    };
    const actionCreator = {
      type: ActionType.fetchDetailUserThread,
      payload: {
        detail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],

        },
      },
    };

    // action
    const nextState = usersThreadReducer(initialState, actionCreator);

    // assert
    expect(nextState).toEqual({ userDetail: actionCreator.payload.detail });
  });
});
