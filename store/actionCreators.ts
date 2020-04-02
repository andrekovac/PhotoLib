import { INCREASE, DECREASE } from './actionTypes';

export type IncreaseActionT = {
    type: 'INCREASE';
}

export type DecreaseActionT = {
    type: 'DECREASE';
}

export const increase = (): IncreaseActionT => {
    return {
        type: INCREASE,
    }
}

export const decrease = (): DecreaseActionT => {
    return {
        type: DECREASE,
    }
}
