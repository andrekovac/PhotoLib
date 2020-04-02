import { INCREASE, DECREASE, RESET } from './actionTypes';

export type CounterActionT = {
    type: typeof INCREASE | typeof DECREASE | typeof RESET,
}

export type DecreaseActionT = {
    type: typeof DECREASE;
}

export const increase = (): CounterActionT => {
    return {
        type: INCREASE,
    }
}

export const decrease = (): CounterActionT => {
    return {
        type: DECREASE,
    }
}

export const reset = (): CounterActionT => {
    return {
        type: RESET,
    }
}
