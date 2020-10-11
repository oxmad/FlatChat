export const SET_USER = "SET_USER";
export const RESET_USER = "RESET_USER";

export const setUser = (username: string) => {
  const color = "#333333";

  return <const>{ type: SET_USER, payload: { username, color } };
};

export const resetUser = () => <const>{ type: RESET_USER };

export type UserActions = ReturnType<typeof setUser | typeof resetUser>;
