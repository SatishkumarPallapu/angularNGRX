import { createReducer, on } from "@ngrx/store";
import { decreaseAction, increaseAction, resetAction } from "./count.action";


const count = 4

export const countReducer = createReducer(
    count,

    on(increaseAction, (state) => state + 1),
    on(decreaseAction, (state) => state - 1),
    on(resetAction, (state) => state - state)
)