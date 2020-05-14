import React from 'react';
import classes from './NumberInput.module.css';

const numberInput = (props) => (
    <div className={classes.NumberInput}>
        <input 
            type='number' 
            defaultValue={props.value} 
            min={props.min} 
            max={props.max} 
            step={(props.max-props.min)/25}
            onChange={(e) => props.numberHandler(props.name, props.type, e)}></input>
    </div>
);

export default numberInput;