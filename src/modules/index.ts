import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter from "./counter";
import github, { githubSaga } from "./github";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
  github,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([githubSaga()]);
}
