import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API;

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export async function createUser(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

export async function signIn(data) {
  const token = await axios.post(`${BASE_URL}/sign-in`, data);
  return token;
}

