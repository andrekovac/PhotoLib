import React from 'react';

export const CounterContext = React.createContext({
    count: 0,
    increase: (): void => {},
    decrease: (): void => {},
});
