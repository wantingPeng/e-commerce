import { USER_ACTION_TYPES } from "./types";

export const Action = (user) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: user,
});
