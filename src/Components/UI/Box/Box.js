import React from 'react';
import classes from './Box.module.css';

const box = (props) => (
    <div className={classes.Box}>
        <h1>{props.heading}</h1>
        {props.children}
    </div>
);

export default box;