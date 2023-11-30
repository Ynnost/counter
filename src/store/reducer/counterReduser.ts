import { InitStateType, initState } from "..";
import { CounterActionsType } from "../actions/actionCounter";

export const counterReducer = (state: InitStateType = initState, action: CounterActionsType) => {
  switch (action.type) {
    case "COUNTING_COUNTER":
      return {
        ...state,
        changeCounter: { ...state.changeCounter, minCounterNumber: state.changeCounter.minCounterNumber + 1 },
      };
    case "RESET_COUNTER":
      return {
        ...state,
        changeCounter: { ...state.changeCounter, minCounterNumber: state.counterСonfiguration.minCounterValue },
      };
    case "UPDATE_MAX_NUMBER_COUNTER":
      return {
        ...state,
        counterСonfiguration: { ...state.counterСonfiguration, maxCounterValue: action.payload.newMaxCounterValue },
      };
    case "UPDATE_MIN_NUMBER_COUNTER":
      return {
        ...state,
        counterСonfiguration: { ...state.counterСonfiguration, minCounterValue: action.payload.newMinCounterValue },
      };
    case "UPDATE_COUNTER":
      return {
        ...state,
        changeCounter: {
          ...state.changeCounter,
          minCounterNumber: state.counterСonfiguration.minCounterValue,
          maxCounterNumber: state.counterСonfiguration.maxCounterValue,
        },
        inputNumberValue: "",
      };
    case "RESPONSE_INPUT":
      return {
        ...state,
        inputNumberValue: action.payload.value,
      };

    default:
      return state;
  }
};
