import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware, { ThunkMiddleware } from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { rootReducer, StoreT } from "./reducer";
import { ActionT } from "./actionCreators";
import fetchSaga from './saga';

const devtools = () =>
  __DEV__ &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  thunkMiddleware,
  sagaMiddleware,
];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    devtools()
  )
);

// then run the saga
sagaMiddleware.run(fetchSaga);


export default store;
