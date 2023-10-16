import React, { useState } from "react";
import "./App.css";
import CounterNum from "./CounterNum";
import { ChangingCounter } from "./ChangingCounter";

export type newCountType = {
  value: string;
  number: number;
};

function App() {
  const [newCount, setNewCount] = useState<newCountType[]>([
    { value: "MaxCount", number: 5 },
    { value: "MinCount", number: 0 },
  ]);

  let [number, setNumber] = useState<number>(newCount[1].number);


  const counter = (n: number) => {
    if (n < newCount[0].number) {
      ++n;
      setNumber(n);
    }
    return;
  };

  const reset = () => setNumber(0);

  const updateMaxCounter = (newMaxCount: number) => {
    let newMaxCounter = [...newCount];
    newMaxCounter[0].number = newMaxCount;
    setNewCount(newMaxCounter);
  };

  const updateMinCounter = (newMinCount: number) => {
    let newMinCounter = [...newCount];
    newMinCounter[0].number = newMinCount;
    setNewCount(newMinCounter);
  };

  const addNewNumber = (newNumberCount: newCountType[]) => {
    let newNumber = [...newCount];
    newNumber = newNumberCount;
    setNewCount(newNumber);
    console.log(newCount[1].number);
    console.log(newCount[0].number);
  };

  return (
    <div className="App">
      <ChangingCounter
        oldNumberMax={newCount[0].number}
        oldNumberMin={newCount[1].number}
        onChangeMax={updateMaxCounter}
        onChangeMin={updateMinCounter}
        collback={addNewNumber}
      />
      <CounterNum
        num={number}
        reached={number === newCount[0].number}
        counter={counter}
        reset={reset}
      />
    </div>
  );
}

export default App;
