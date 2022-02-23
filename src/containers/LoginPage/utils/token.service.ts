//utils
import jwtDecode from "jwt-decode";

const JWT_TOKEN = "user_token";

export const setToken = (token: any) => {
  localStorage.setItem(JWT_TOKEN, token);
};

export const removeToken = () => {
  localStorage.removeItem(JWT_TOKEN);
};

export const clearStorage = () => {
  localStorage.clear();
};

export const getToken = () => {
  return localStorage.getItem(JWT_TOKEN);
};

export const decodeToken = (token: any) => {
  let user: any;
  try {
    user = jwtDecode(token);
  } catch (error) {
    console.log("could not decode token");
  }
  return user;
};
