import http from '~/util/http';

export const login = (body) => {
  return http.get('/user/1', body);
};

export const register = (body) => {
  return http.post('/user', body);
};
