import { combineReducers } from "redux";

import { IncreaseActionT, DecreaseActionT } from "./actionCreators";
import { INCREASE, DECREASE } from './actionTypes';

const defaultState: number = 0;

const counterReducer = (state = defaultState, action: IncreaseActionT | DecreaseActionT) => {
  switch (action.type) {
    case INCREASE:
      state = state + 1;
      break;
    case DECREASE:
      if (state > 0) {
        state = state - 1;
      }
      break;
  }
  return state;
};

export const rootReducer = combineReducers({
  count: counterReducer
  // add other reducers here
});

export type StoreT = NonNullable<Parameters<typeof rootReducer>[0]>;
