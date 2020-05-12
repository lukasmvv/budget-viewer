import React from 'react';
import classes from './Label.module.css';

const label = (props) => (
    <div className={classes.Label}>   
        <p>{props.label}</p>  
    </div>
);

export default label;