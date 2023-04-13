import userProfileReducer from './userProfileReducer';
import ActionType from './ActionType';
/**
 * Usecase Scenario
 *
 * Should Return initialState when its given unknown action creator
 * Should Return User Profile when its given by GET_USER_PROFILE action creator
 */
describe('User Profile Reducer', () => {
  it('Should Return return initialState when its given unknown action creator', () => {
    // arrange / mendapatkan seluruh kebutuhan untuk testing.
    const initialState = null;
    const unknownActionCreator = { type: 'UNKNOWN_ACTION' };

    // action
    const nextState = userProfileReducer(initialState, unknownActionCreator);

    // assert
    expect(nextState).toBeNull();
  });

  it('Should Return User Profile when its givben by GET_USER_PROFILE action creator', () => {
    // arrange
    const initialState = null;
    const actionCreator = {
      type: ActionType.getUserProfile,
      payload: {
        profile: {
          name: 'Ripan',
          age: 20,
        },
      },
    };
    // action
    const nextState = userProfileReducer(initialState, actionCreator);
    // assert
    expect(nextState).toEqual(actionCreator.payload.profilee);
  });
});
