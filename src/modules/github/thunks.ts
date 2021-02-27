import { Dispatch } from "redux";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { getUserProfile } from "../../api/github";
import { getUserProfileAsyncThunk } from "./actions";

export function getUserProfileThunk(username: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getUserProfileAsyncThunk;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

// export const getUserProfileThunk = createAsyncThunk(
//   getUserProfileAsync,
//   getUserProfile
// );
