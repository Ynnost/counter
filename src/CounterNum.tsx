import React from "react";
import Button from "./Button";

export type Number = {
  num: number;
  reached: boolean;
  counter: (num: number) => void;
  reset: (num: number) => void;
};

const CounterNum = (props: Number) => {


//  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//    setInputValue(e.target.value);
//  };

  
  return (
    <div className="container">
      <div className={"item1"}>
        <p className={props.reached ? 'p--red' : 'p'}>{props.num}</p>
      </div>

      <div className={"item2"}>
        <Button
          name={"inc"}
          reached={props.reached}
          callback={() => props.counter(+props.num)}
        />
        <Button
          name={"Reset"}
          reached={props.reached}
          callback={() => props.reset(+props.num)}
        />
      </div>
    </div>
  );
};

export default CounterNum;
