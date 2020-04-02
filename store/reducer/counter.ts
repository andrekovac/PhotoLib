import { CounterActionT } from "../actionCreators/counter";
import { INCREASE, DECREASE, RESET } from '../actionTypes/counter';

const defaultState: number = 0;

const counterReducer = (state = defaultState, action: CounterActionT) => {
  switch (action.type) {
    case INCREASE:
      state = state + 1;
      break;
    case DECREASE:
      if (state > 0) {
        state = state - 1;
      }
      break;
    case RESET:
      state = defaultState;
  }
  return state;
};

export default counterReducer;