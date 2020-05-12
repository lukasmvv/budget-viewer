import React from 'react';
import classes from './VariableInput.module.css';
import Slider from '../Slider/Slider';

const variableInput = (props) => (
    <div className={classes.VariableInput}>
        {/* <p>{props.name}</p> */}
        <Slider min={props.min} max={props.max} value={props.value} name={props.name} sliderHandler={props.sliderHandler}></Slider>     
    </div>
);

export default variableInput;