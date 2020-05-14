import React from 'react';
import classes from './FixedInput.module.css';
import NumberInput from '../NumberInput/NumberInput';

const fixedInput = (props) => (
    <div className={classes.FixedInput}>
        {/* <p>{props.name}</p>
        <p>{props.value}</p>
        <p>{props.min}</p>
        <p>{props.max}</p> */}
        <NumberInput {...props} numberHandler={props.numberHandler}></NumberInput>
    </div>
);

export default fixedInput;