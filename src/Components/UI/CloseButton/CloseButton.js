import React from 'react';
import classes from './CloseButton.module.css';

const closeButton = (props) =>  (
    <p className={classes.CloseButton} onClick={() => props.clicked(props.name)}>X</p>
);

export default closeButton;