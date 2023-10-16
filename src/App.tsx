import React, { useEffect, useState } from "react";
import "./App.css";
import CounterNum from "./CounterNum";
import { ChangingCounter } from "./ChangingCounter";

export type CountType = {
  maxCount: number;
  minCount: number;
};

function App() {

  let [newCount, setNewCount] = useState<CountType>({
    maxCount: 5,
    minCount: 0,
  });

  let [number, setNumber] = useState<number>(newCount.minCount);

  const counter = (n: number) => {
    if (n < newCount.maxCount) {
      ++n;
      setNumber(n);
    }
    return;
  };

  const reset = () => setNumber(newCount.minCount);

  const updateMaxCounter = (newMaxCount: number) => {
    newCount = { ...newCount, maxCount: newMaxCount };
    setNewCount(newCount);
  };

  const updateMinCounter = (newMinCount: number) => {
      newCount = { ...newCount, minCount: newMinCount };
      setNewCount(newCount);
  };

  const addNewNumber = (newNumberCount: CountType) => {
    newCount = { ...newCount};
    newCount = newNumberCount
    setNewCount(newCount);
    setNumber(newCount.minCount);
  };

  return (
    <div className="App">
      <ChangingCounter
        oldNumberMax={newCount.maxCount}
        oldNumberMin={newCount.minCount}
        onChangeMax={updateMaxCounter}
        onChangeMin={updateMinCounter}
        collback={addNewNumber}
      />
      <CounterNum
        num={number}
        reached={number === newCount.maxCount}
        counter={counter}
        reset={reset}
      />
    </div>
  );
}

export default App;
