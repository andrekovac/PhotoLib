import { applyMiddleware, createStore, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { rootReducer, StoreT } from "./reducer";
import { ActionT } from "./actionCreators";

const devtools =
  (__DEV__ && global.reduxNativeDevTools) || (() => noop => noop);

const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(
    thunk as ThunkMiddleware<StoreT, ActionT>
  ),
  devtools()),
);

export default store;
