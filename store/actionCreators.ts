import { INCREASE } from './actionTypes';

export type IncreaseActionT = {
    type: 'INCREASE';
}

export const increase = (): IncreaseActionT => {
    return {
        type: INCREASE,
    }
}
