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

export async function getTestsByDiscipline(token) {
  const config = createConfig(token);
  const data = await axios.get(`${BASE_URL}/tests?groupBy=disciplines`, config);
  return data;
}

export async function getTestsByTeacher(token) {
  const config = createConfig(token);
  const data = await axios.get(`${BASE_URL}/tests?groupBy=teachers`, config);
  return data;
}

export async function getCategories(token) {
  const config = createConfig(token);
  const data = await axios.get(`${BASE_URL}/categories`, config);
  return data;
}
