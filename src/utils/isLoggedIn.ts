export const isLoggedIn = () => {
  const userName = localStorage.getItem("username");

  return Boolean(userName);
};
