import React from 'react';
//import classes from './VariableExpenses.module.css';
import Box from '../../../Components/UI/Box/Box';
import VariableInput from '../../UI/VariableInput/VariableInput';



const variableExpenses = (props) => {
    console.log(props);
    return (
        <Box heading={"Variable Expenses"}>
            <p>variable income</p>
            <VariableInput 
                name={props.varExpenses[0].name} 
                min={props.varExpenses[0].min} 
                max={props.varExpenses[0].max}
                value={props.varExpenses[0].value}
                sliderHandler={props.sliderHandler}>
            </VariableInput>
        </Box>
    );
};

export default variableExpenses;