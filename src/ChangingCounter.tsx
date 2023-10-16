import { type } from "os";
import Button from "./Button";
import { ChangeEvent, useState } from "react";
import { CountType } from "./App";

type ChangingCounterType = {
  oldNumberMax: number;
  oldNumberMin: number;
  onChangeMax: (oldNumberMax: number) => void;
  onChangeMin: (oldNumberMin: number) => void;
  collback: (newNumber: CountType) => void;
  setInputValue: (value: string) => void;
};

export const ChangingCounter = (props: ChangingCounterType) => {
  let [newCount, setNewCount] = useState({
    maxCount: props.oldNumberMax,
    minCount: props.oldNumberMin,
  });

  const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    newCount = { ...newCount, maxCount: +e.currentTarget.value };
    props.setInputValue(e.currentTarget.value);
    setNewCount(newCount);
  };

  const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
    newCount = { ...newCount, minCount: +e.currentTarget.value };
    props.setInputValue(e.currentTarget.value);
    setNewCount(newCount);
  };

  const addNewCountNumber = () => {
    props.setInputValue("");
    props.collback(newCount);
  };

  return (
    <div className="container">
      <div>
        <label className="label">Max Value: </label>
        <input
          className={newCount.maxCount < 0 ? "inputRed" : "input"}
          type="number"
          value={newCount.maxCount}
          onChange={onChangeMax}
        />
      </div>
      <div>
        <label className="label">Min Value: </label>
        <input
          className={newCount.minCount < 0 ? "inputRed" : "input"}
          type="number"
          value={newCount.minCount}
          onChange={onChangeMin}
        />
      </div>
      <div className={"item2"}>
        <button
          disabled={newCount.minCount < 0 || newCount.maxCount < 0}
          className="buttons"
          onClick={addNewCountNumber}
        >
          Set
        </button>
      </div>
    </div>
  );
};
