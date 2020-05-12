import React from 'react';
import classes from './Slider.module.css';

const slider = (props) => (
    <div className={classes.Slider}>
        <div className={classes.Top}>
            <p>{props.value}</p>
        </div>
        <div className={classes.Mid}>
            <p>{props.min}</p>
            <input type="range" min={props.min} max={props.max} value={props.value} step="1" onChange={(e) => props.sliderHandler(props.name, e)}></input>
            <p>{props.max}</p>
        </div>      
    </div>
);

export default slider;