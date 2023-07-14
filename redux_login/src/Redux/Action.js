// actions.js

export const login = (username, password) => {
  return { type: "LOGIN", username, password };
};

export const logout = () => {
  return { type: "LOGOUT" };
};
