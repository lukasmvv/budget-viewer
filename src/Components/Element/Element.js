import React from 'react';
//import classes from '*.module.css';
import classes from './Element.module.css';
// import Box from '../../../Components/UI/Box/Box';
// import VariableInput from '../../UI/VariableInput/VariableInput';
import Labels from '../UI/Labels/Labels';
import CloseButton from '../UI/CloseButton/CloseButton';

const element = (props) => {
    return (
        <div className={classes.Element}>
            <p>{props.name}</p>
            {/* <p>(Test label)</p> */}
            <Labels labels={props.labels}></Labels>
            {props.children}
            <CloseButton name={props.name} clicked={props.closeClicked}></CloseButton>
        </div>
    );
};

export default element;