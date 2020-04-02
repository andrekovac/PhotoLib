import { INCREASE, DECREASE, RESET } from '../actionTypes/counter';

export type CounterActionT = {
    type: typeof INCREASE | typeof DECREASE | typeof RESET,
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
