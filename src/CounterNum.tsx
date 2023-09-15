import React from 'react';
import Button from "./Button";

export type Number ={
    num:number
    reached:boolean
    counter:(num:number)=>void
    reset:(num:number)=>void
}



const CounterNum = (props:Number) => {

    return (
        <div>
            <p className={props.reached ? 'div-el-red' : 'div-el'}>{props.num}</p>
            <div className={'div-el1'}>
                <Button name={'inc'} reached={props.reached} callback={()=>props.counter(props.num)}/>
                <Button name={'Reset'} reached={props.reached} callback={()=>props.reset(props.num)}/>
            </div>
        </div>
    );
};

export default CounterNum;