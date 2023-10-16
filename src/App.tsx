import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import CounterNum from "./CounterNum";
import { ChangingCounter } from "./ChangingCounter";

export type CountType = {
  maxCount: number;
  minCount: number;
};


function App() {
  let [newCount, setNewCount] = useState<CountType>(() => {
    const savedData = localStorage.getItem("newCount");
    return savedData ? JSON.parse(savedData) : { maxCount: 5, minCount: 0 };
  });

  const [inputValue, setInputValue] = useState("");


  useEffect(() => {
    localStorage.setItem("newCount", JSON.stringify(newCount));
  }, [newCount]); // добавляем newCount в массив зависимостей

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
    newCount = { ...newCount };
    newCount = newNumberCount;
    setNewCount(newCount);
    setNumber(newCount.minCount);
  };

  return (
    <div className="App">
      <ChangingCounter
        setInputValue={setInputValue}
        oldNumberMax={newCount.maxCount}
        oldNumberMin={newCount.minCount}
        onChangeMax={updateMaxCounter}
        onChangeMin={updateMinCounter}
        collback={addNewNumber}
      />
      <CounterNum
        num={number}
        reached={number === newCount.maxCount || +inputValue < 0}
        counter={counter}
        reset={reset}
        inputValue={inputValue}
      />
    </div>
  );
}

export default App;
