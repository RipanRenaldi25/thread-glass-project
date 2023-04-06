import threadReducer from './threadReducer';

const fakeThreadResponse = [
  {
    id: 'talk-1',
    text: 'Talk Test 1',
    user: 'user-1',
    replyTo: '',
    likes: [],
    createdAt: '2022-09-22T10:06:55.588Z',
  },
];

const fakeErrorResponse = new Error('Ups, Something Went Wrong');

/**
 * Test Scenario for Thread Reducer
 * Should Return Initial State When given by Unknown Action
 * Should return threads when given by FETCH_THREAD action
 * Should return threads with the new threads by CREATE_THREAD action
 */
describe('Thread reducer', () => {
  it('Should Return Initial State When Given By Unknown Action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'NO_MATTER_WHAT' };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });
  it('Should Return Threads with new threads when given by FETCH_THREAD', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'FETCH_THREAD',
      payload: {
        threads: {
          threads: [
            {
              id: 'thread-1',
              title: 'Thread Pertama',
              body: 'Ini adalah thread pertama',
              category: 'General',
              createdAt: '2021-06-21T07:00:00.000Z',
              ownerId: 'users-1',
              upVotesBy: [],
              downVotesBy: [],
              totalComments: 0,
            },
          ],
        },
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });
  it('Should Return thread with the new thread when given by CREATE_THREAD', () => {
    // arrange
    const initialState = {
      threads: [
        {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      ],
    };
    const action = {
      type: 'CREATE_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      threads: [...initialState.threads, action.payload.thread],
    });
  });
});
