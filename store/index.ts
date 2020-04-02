import { applyMiddleware, createStore } from "redux";
import thunkMiddleware, { ThunkMiddleware } from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { rootReducer, StoreT } from "./reducer";
import { ActionT } from "./actionCreators";
import fetchSaga from './saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  thunkMiddleware,
  sagaMiddleware,
];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

// then run the saga
sagaMiddleware.run(fetchSaga);


export default store;
