import axios from 'axios';

export const registerUser = async ({ name, email, password }) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, {
    name,
    email,
    password,
  });
  return response.data;
};

export const loginUser = async ({ email, password }) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
    email,
    password,
  });
  return response.data;
};

export const getOwnProfile = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`,
    },
  });
  return response.data;
};

export const getAllThreads = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/threads`);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
  return response.data;
};

export const getUserDetailByThread = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/threads/${id}`);
  return response.data;
};

export const createComment = async ({ threadId, comment }) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/threads/${threadId}/comments`, { content: comment }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`,
    },
  });
  return response.data;
};

export const createThread = async ({ title, body, category }) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/threads`, { title, body, category }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`,
    },
  });
  return response.data;
};

export const getAllLeaderBoard = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/leaderboards`);
  return response.data;
};
