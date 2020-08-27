import {Action} from 'redux';
import { INCREASE, DECREASE, RESET } from '../actionTypes/counter';

export type CounterActionT = {
    type: typeof INCREASE | typeof DECREASE | typeof RESET,
}

export const increase = (): Action<typeof INCREASE> => {
    return {
        type: INCREASE,
    }
}

export const decrease = (): Action<typeof DECREASE> => {
    return {
        type: DECREASE,
    }
}

export const reset = (): Action<typeof RESET> => {
    return {
        type: RESET,
    }
}
