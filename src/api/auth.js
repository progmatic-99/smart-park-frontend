const axios = require('axios').default;

const BASE_URL = 'http://127.0.0.1:8000';
const ACCESS_TOKEN = 'access_token';

let tokenRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const signupUser = async ({ name, email, password }) => {
  const signupBody = { name: name, email: email, password: password };

  try {
    const resp = await tokenRequest.post('/api/register', signupBody);

    return Promise.resolve(resp.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const loginUser = async ({ email, password }) => {
  const loginBody = { email: email, password: password };

  try {
    const resp = await tokenRequest.post('/api/login', loginBody);
    window.localStorage.setItem(ACCESS_TOKEN, resp.data['jwt']);

    return Promise.resolve(resp.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const authRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`,
    'Content-Type': 'application/json',
  },
});

export { tokenRequest, signupUser, loginUser };
