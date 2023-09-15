import React, {useState} from 'react';
import './App.css';
import CounterNum from "./CounterNum";


function App() {

  let [number, setNumber]=useState<number>(0)

  const counter = (n:number) => {
      if(n < 5) {++n
          setNumber(n)}
      return
  }

  const reset = (n:number)=>{
      setNumber(0)
  }



  return (
    <div className="App">
            <CounterNum num={number} reached={number === 5} counter={counter} reset={reset}/>
    </div>
  );
}

export default App;
