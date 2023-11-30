export type CounterActionsType =
  | UpdateMaxCounterAC
  | UpdateMinCounterAC
  | UpdateCounter
  | CountingCounterAC
  | ResetCounterAC
  | ResponseToInputValue;

type UpdateMaxCounterAC = ReturnType<typeof updateMaxCounterAC>;
export const updateMaxCounterAC = (newMaxCounterValue: number) =>
  ({
    type: "UPDATE_MAX_NUMBER_COUNTER",
    payload: { newMaxCounterValue },
  } as const);

type UpdateMinCounterAC = ReturnType<typeof updateMinCounterAC>;
export const updateMinCounterAC = (newMinCounterValue: number) =>
  ({
    type: "UPDATE_MIN_NUMBER_COUNTER",
    payload: { newMinCounterValue },
  } as const);

type UpdateCounter = ReturnType<typeof updateCounterAC>;
export const updateCounterAC = () =>
  ({
    type: "UPDATE_COUNTER",
  } as const);

export type CountingCounterAC = ReturnType<typeof countingCounterAC>;
export const countingCounterAC = () =>
  ({
    type: "COUNTING_COUNTER",
  } as const);

type ResetCounterAC = ReturnType<typeof resetCounterAC>;
export const resetCounterAC = () =>
  ({
    type: "RESET_COUNTER",
  } as const);

type ResponseToInputValue = ReturnType<typeof responseToInputValueAC>;
export const responseToInputValueAC = (value: string) =>
  ({
    type: "RESPONSE_INPUT",
    payload: { value },
  } as const);
