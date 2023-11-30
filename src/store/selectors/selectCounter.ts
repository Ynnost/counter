import { AppRootStateType } from "..";
import { CounterType } from "../../types";

export const selectCounter = (state: AppRootStateType): CounterType => state.counter;
