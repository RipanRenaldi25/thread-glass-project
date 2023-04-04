import ActionType from './ActionType';

const userProfileReducer = (state = null, action = {}) => {
  switch (action.type) {
    case ActionType.getUserProfile:
      return action.payload.profile;
    default: return state;
  }
};

export default userProfileReducer;
