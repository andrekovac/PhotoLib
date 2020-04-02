import { ThunkAction } from "redux-thunk";

import { StoreT } from "../reducer";
import { CounterActionT } from "./counter";
import { PhotosActionT } from "./photos";

export type ActionT = CounterActionT | PhotosActionT;

export type ThunkResult<R> = ThunkAction<R, StoreT, undefined, ActionT>;
