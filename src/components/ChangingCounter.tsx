import { ChangeEvent, memo, useCallback } from "react";
import { CounterType } from "../types";
import { useDispatch } from "react-redux";
import { responseToInputValueAC, updateCounterAC, updateMaxCounterAC, updateMinCounterAC } from "../store/actions/actionCounter";

type ChangingCounterType = {
  counter: CounterType;
};

const ChangingCounter: React.FC<ChangingCounterType> = memo(({ counter }) => {
  const counterСonfiguration = counter.counterСonfiguration;

  const convertingValueToNumber = Number(counter.inputNumberValue);

  const dispatch = useDispatch();

  const updateMaxCounterNumber = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(responseToInputValueAC(e.currentTarget.value));
      dispatch(updateMaxCounterAC(Number(e.currentTarget.value)));
    },
    [dispatch]
  );

  const updateMinCounterNumber = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(responseToInputValueAC(e.currentTarget.value));
      dispatch(updateMinCounterAC(Number(e.currentTarget.value)));
    },
    [dispatch]
  );

  const updateCounter = () => {
    dispatch(updateCounterAC());
  };

  return (
    <div className="container">
      <div>
        <label className="label">Max Value: </label>
        <input
          className={counterСonfiguration.maxCounterValue < 0 ? "inputRed" : "input"}
          type="number"
          value={counterСonfiguration.maxCounterValue}
          onChange={updateMaxCounterNumber}
        />
      </div>
      <div>
        <label className="label">Min Value: </label>
        <input
          className={counterСonfiguration.minCounterValue < 0 ? "inputRed" : "input"}
          type="number"
          value={counterСonfiguration.minCounterValue}
          onChange={updateMinCounterNumber}
        />
      </div>
      <div className={"item2"}>
        <button
          disabled={
            convertingValueToNumber < 0 ||
            convertingValueToNumber < counterСonfiguration.minCounterValue ||
            convertingValueToNumber > counterСonfiguration.maxCounterValue
          }
          className="buttons"
          onClick={updateCounter}
        >
          Set
        </button>
      </div>
    </div>
  );
});

export default ChangingCounter;
