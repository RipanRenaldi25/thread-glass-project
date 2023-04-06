import ActionType from './ActionType';
import userReducer from './userReducer';

/**
 * test case scenario
 * should return initial state when its given by unknown action creator
 * Should return the value of local storage auth token if users already logged in
 * should return authtoken when its given by set auth user action creator
 * should return null when its given by un set auth user action creator
 */

describe('Users Reducer', () => {
  it('Should return initial state when its given by unknown action creator', () => {
    // arrange
    const initialState = null;
    const actionCreator = { type: 'UNKNOWN ACTION CREATOR' };

    // action
    const nextState = userReducer(initialState, actionCreator);

    // assert
    expect(nextState).toBeNull();
  });
  it('Should return the value of local storage auth token if users already logged in', () => {
    // arrange
    let initialState = null;
    const authToken = 'aksdjaksldlkh123';
    if (authToken) {
      initialState = authToken;
    }

    // action
    const nextState = userReducer(initialState, {});
    expect(nextState).toBeDefined();
  });
  it('should return authtoken when its given by set auth user action creator', () => {
    // arrange
    const initialState = null;
    const actionCreator = {
      type: ActionType.setAuthUser,
      payload: {
        authUser: {
          name: 'ripanrenaldi',
          authToken: 'kajsdljldsa123',
        },
      },
    };

    // action
    const nextState = userReducer(initialState, actionCreator);

    // assert
    expect(nextState).toBe(actionCreator.payload.authUser);
  });
  it('should return null when its given by un set auth user action creator', () => {
    // arrange
    const initialState = 'aksjdlksadj123';
    const actionCreator = { type: ActionType.unSetAuthUser };

    // action
    const nextState = userReducer(initialState, actionCreator);

    // assert
    expect(nextState).toBeNull();
  });
});
