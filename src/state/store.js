import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import userReducer from './users/userReducer';
import userProfileReducer from './userProfile/userProfileReducer';
import threadReducer from './threads/threadReducer';
import usersThreadReducer from './usersThread/usersThreadReducer';
import leaderBoardReducer from './leaderboards/leaderboardReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: userProfileReducer,
    threads: threadReducer,
    users: usersThreadReducer,
    loadingBar: loadingBarReducer,
    leaderBoard: leaderBoardReducer,
  },
});

export default store;
