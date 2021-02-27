import { createReducer } from "typesafe-actions";
import {
  getUserProfileAsync,
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERROR,
  GET_USER_PROFILE_SUCCESS,
} from "./actions";
import { GithubAction, GithubState } from "./types";
import {
  asyncState,
  createAsyncReducer,
  transformToArray,
} from "../../lib/reducerUtils";

const initialState: GithubState = {
  userProfile: {
    loading: false,
    error: null,
    data: null,
  },
};
const github = createReducer<GithubState, GithubAction>(initialState, {
  [GET_USER_PROFILE]: (state, action) => ({
    ...state,
    userProfile: asyncState.load(),
  }),

  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: asyncState.success(action.payload),
  }),

  [GET_USER_PROFILE_ERROR]: (state, action) => ({
    ...state,
    userProfile: asyncState.error(action.payload),
  }),
});

// const initialState: GithubState = {
//   userProfile: asyncState.initial(),
// };

// const github = createReducer<GithubState, GithubAction>(
//   initialState
// ).handleAction(
//   transformToArray(getUserProfileAsync),
//   createAsyncReducer(getUserProfileAsync, "userProfile")
// );

export default github;
