import { type } from "os";
import Button from "./Button";
import { ChangeEvent, useState } from "react";
import { newCountType } from "./App";



type ChangingCounterType = {
  oldNumberMax: number;
  oldNumberMin: number;

  onChangeMax: (oldNumberMax: number) => void;
  onChangeMin: (oldNumberMin: number) => void;
  collback: (newNumber: newCountType[]) => void;
};

export const ChangingCounter = (props: ChangingCounterType) => {
 

  const [newCount, setNewCount] = useState<newCountType[]>([
    { value: "MaxCount", number: props.oldNumberMax },
    { value: "MinCount", number: props.oldNumberMin },
  ]);

 

//   const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
//     const newNumber = newCount.filter((el) =>
//       el.value === "MaxCount" ? el.number === +e.currentTarget.value : el);
//     setNewCount(newNumber);
//   };

//   const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
//     const newNumber = newCount.filter((el) =>
//       el.value === "MinCount" ? el.number === +e.currentTarget.value : el
//     );
//     setNewCount(newNumber);
//   };



const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
  const newNumber = [...newCount]
  newNumber[0].number = +e.currentTarget.value;
  setNewCount(newNumber);
};

const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
 const newNumber = [...newCount];
 newNumber[1].number = +e.currentTarget.value;
 setNewCount(newNumber);
};



  const addNewCountNumber = () => {
    props.collback(newCount);
  };

  return (
    <div className="container">
      <div>
        <label>Max Value: </label>
        <input
          type="number"
          value={newCount[0].number}
          onChange={onChangeMax}
        />
      </div>
      <div>
        <label>Min Value: </label>
        <input
          type="number"
          value={newCount[1].number}
          onChange={onChangeMin}
        />
      </div>
      <div className={"item2"}>
        <button onClick={addNewCountNumber}>Set</button>
      </div>
    </div>
  );
};
