import Button from "./Button";
import { useDispatch } from "react-redux";
import { CounterType } from "../types";
import { countingCounterAC, resetCounterAC } from "../store/actions/actionCounter";
import { memo, useCallback } from "react";

export type WorkingCounterType = {
  counter: CounterType;
};

const ChangeCounter: React.FC<WorkingCounterType> = memo(({ counter }) => {
  const dispatch = useDispatch();

  const changeCounter = counter.changeCounter;

  const convertingValueToNumber = Number(counter.inputNumberValue);

  const inputValueHandler = () => {
    if (convertingValueToNumber < 0) {
      return "Incorrect value";
    }
    if (counter.inputNumberValue) {
      return 'Enter value and press "Set"';
    }
    return changeCounter.minCounterNumber;
  };

  const counterOperation = useCallback(() => {
    dispatch(countingCounterAC());
  }, [dispatch]);

  const resetCounter = () => {
    dispatch(resetCounterAC());
  };

  const reached =
    !!convertingValueToNumber ||
    convertingValueToNumber < 0 ||
    changeCounter.maxCounterNumber === changeCounter.minCounterNumber ||
    convertingValueToNumber > changeCounter.maxCounterNumber;

  return (
    <div className="container">
      <div className={"item1"}>
        <p className={reached ? "p--red" : "p"}>{inputValueHandler()}</p>
      </div>

      <div className={"item2"}>
        <Button name={"inc"} reached={reached} onClick={counterOperation} />
        <Button
          name={"Reset"}
          reached={
            !!counter.inputNumberValue || convertingValueToNumber < 0 || changeCounter.maxCounterNumber !== changeCounter.minCounterNumber
          }
          onClick={resetCounter}
        />
      </div>
    </div>
  );
});

export default ChangeCounter;
