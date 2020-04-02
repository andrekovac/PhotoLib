import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { rootReducer, StoreT } from "./reducer";
import { ActionT } from "./actionCreators";

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk as ThunkMiddleware<StoreT, ActionT>
  )
);

export default store;
