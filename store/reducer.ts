import { combineReducers } from "redux";

import { IncreaseActionT } from "./actionCreators";
import { INCREASE } from './actionTypes';

const defaultState: number = 0;

const counterReducer = (state = defaultState, action: IncreaseActionT) => {
  switch (action.type) {
    case INCREASE:
      state = state + 1;
      break;
  }
  return state;
};

export const rootReducer = combineReducers({
  count: counterReducer
  // add other reducers here
});

export type StoreT = NonNullable<Parameters<typeof rootReducer>[0]>;
