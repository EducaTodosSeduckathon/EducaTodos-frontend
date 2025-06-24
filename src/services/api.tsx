import axios from 'axios';
const getAccessToken = () => JSON.parse(localStorage.getItem('access_token'));

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// 👉 Anexa token JWT automaticamente
api.interceptors.request.use(config => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 👉 Intercepta erro de autenticação e desloga
api.interceptors.response.use(
  response => response,
  error => {
    const status = error.response?.status;
    const code = error.response?.data?.code;

    const isInvalidToken =
      status === 403 && code === 'jwt_auth_invalid_token';
    const isUnauthorized = status === 401;

    if (isInvalidToken || isUnauthorized) {
      // logout();
    }

    return Promise.reject(error);
  }
);

export default api;