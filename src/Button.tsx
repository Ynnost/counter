import React from 'react';
import './App.css';
export type ButtonType = {
    name:string;
    reached: boolean
    callback:()=>void
}

const Button = (props:ButtonType) => {

    const onClickHandler =()=> {
        props.callback()
    }

    return (
        <div>
            <button className={'buttons'} disabled={props.name === 'Reset' ? !props.reached : props.reached} onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default Button;