import { RESET_USER, SET_USER, UserActions } from "../actions/user.actions";

interface UserReducerState {
  username: string;
  color: string;
}

const initialState = null;

export const userReducer = (
  state: UserReducerState | null = initialState,
  action: UserActions
): UserReducerState | null => {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload };

    case RESET_USER:
      return null;

    default:
      return state;
  }
};
