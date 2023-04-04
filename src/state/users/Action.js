import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ActionType from './ActionType';
import { registerUser, loginUser } from '../../utils/api';

export const setAuthUser = (authUser) => ({
  type: ActionType.setAuthUser,
  payload: {
    authUser,
  },
});

export const unSetAuthUser = () => ({
  type: ActionType.unSetAuthUser,
});

export const asyncRegistUser = ({ name, email, password }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const { message } = await registerUser({ name, email, password });
    alert(message);
  } catch ({ response: { data } }) {
    alert(data.message);
  } finally {
    dispatch(hideLoading());
  }
};

export const asyncLoginUser = ({ email, password }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const { data: { token } } = await loginUser({ email, password });
    dispatch(setAuthUser(token));
    localStorage.setItem('AUTH_TOKEN', token);
  } catch ({ response: { data } }) {
    const { message } = data;
    alert(message);
    return;
  }
  dispatch(hideLoading());
};
