import React from 'react';
//import classes from './VariableExpenses.module.css';
import Box from '../../../Components/UI/Box/Box';
import VariableInput from '../../UI/VariableInput/VariableInput';
import Element from '../../Element/Element';



const variableExpenses = (props) => {
    console.log(props);
    return (
        <Box heading={"Variable Expenses"}>
            <p>variable expenses</p>
            {props.variableExpenses.map((exp, i) => {
                return (
                    <Element key={i} name={exp.name} labels={exp.labels}>
                        <VariableInput 
                            name={exp.name} 
                            min={exp.min} 
                            max={exp.max}
                            value={exp.value}
                            sliderHandler={props.sliderHandler}>
                        </VariableInput>
                    </Element>
                );
                 
            })}                       
        </Box>
    );
};

export default variableExpenses;