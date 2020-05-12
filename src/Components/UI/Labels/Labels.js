import React from 'react';
import classes from './Labels.module.css';
import Label from './Label/Label';

const labels = (props) => (
    <div className={classes.Labels}>   
        {props.labels.map((label,i) => {
            return (
                <Label key={i} label={label}></Label>
            );
        })}  
    </div>
);

export default labels;