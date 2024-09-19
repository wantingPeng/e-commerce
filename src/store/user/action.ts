import { USER_ACTION_TYPES } from "./types";
import { ActionWithPayload, createAction } from "../CreatAction";
import { withMatcher } from "../CreatAction";
import { UserData } from "../../utils/firebase";
export type userAction = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;

export const Action = withMatcher(
  (user: UserData): userAction =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);
