import { applyMiddleware, createStore, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { rootReducer, StoreT } from "./reducer";
import { ActionT } from "./actionCreators";

const devtools = () =>
  __DEV__ &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk as ThunkMiddleware<StoreT, ActionT>),
    devtools()
  )
);

export default store;
