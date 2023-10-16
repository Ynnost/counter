import React from "react";
import Button from "./Button";

export type Number = {
  num: number;
  reached: boolean;
  counter: (num: number) => void;
  reset: (num: number) => void;
  inputValue: string;
};

const CounterNum = (props: Number) => {
  const inputValueHandler = () => {
    if (+props.inputValue < 0) {
      return "Incorrect value";
    }
    if (props.inputValue) {
      return 'Enter value and press "Set"';
    }
    return props.num.toString();
  };

  return (
    <div className="container">
      <div className={"item1"}>
        <p className={props.reached ? "p--red" : "p"}>{inputValueHandler()}</p>
      </div>

      <div className={"item2"}>
        <Button
          name={"inc"}
          reached={props.reached}
          callback={() => props.counter(+props.num)}
        />
        <Button
          name={"Reset"}
          reached={!props.reached || +props.inputValue < 0}
          callback={() => props.reset(+props.num)}
        />
      </div>
    </div>
  );
};

export default CounterNum;
