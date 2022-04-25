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

export async function getAllDisciplines(token) {
  const config = createConfig(token);
  const data = await axios.get(`${BASE_URL}/exams`, config);
  return data;
}

export async function getAllTeachers(token) {
  const config = createConfig(token);
  const data = await axios.get(`${BASE_URL}/teachers`, config);
  return data;
}
