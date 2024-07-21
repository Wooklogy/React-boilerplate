import axios, { AxiosInstance } from "axios";
type AuthTokenType = string | undefined;

const JWT_TOKEN_KEY_NAME = import.meta.env.VITE_ACCESS_KEY;

const REST_API: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_SERVER_LOCAL_PATH
      : import.meta.env.VITE_SERVER_PATH,
});

const AUTH_API: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_SERVER_LOCAL_PATH
      : import.meta.env.VITE_SERVER_PATH,
});

const getLoginToken = (): AuthTokenType => {
  const item: string | null = localStorage.getItem(JWT_TOKEN_KEY_NAME);
  if (item) {
    const token: AuthTokenType = item;
    return token;
  }
  return undefined;
};

const setLoginToken = (token: AuthTokenType): AuthTokenType => {
  localStorage.setItem(JWT_TOKEN_KEY_NAME, `${token}`);
  return token;
};

const clearToken = () => {
  localStorage.clear();
};

const API = {
  REST_API,
  AUTH_API,
  getLoginToken,
  setLoginToken,
  clearToken,
};
export default API;
