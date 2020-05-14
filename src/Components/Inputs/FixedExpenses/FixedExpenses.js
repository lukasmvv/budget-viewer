import React from 'react';
//import classes from './FixedExpenses.module.css';
import Box from '../../../Components/UI/Box/Box';
import FixedInput from '../../UI/FixedInput/FixedInput';
import Element from '../../Element/Element';

const fixedExpenses = (props) => {
    const type = 'fixedExp';
    return (
        <Box heading={"Fixed Expenses"}>
            <p>fixed expenses</p>
            {props.fixedExpenses.map((exp, i) => {
                return (
                    <Element key={i} name={exp.name} labels={exp.labels} closeClicked={props.closeClickHandler} type={type}>
                        <FixedInput 
                            name={exp.name} 
                            min={exp.min} 
                            max={exp.max}
                            value={exp.value}
                            numberHandler={props.numberHandler}
                            type={type}>
                        </FixedInput>
                    </Element>
                );
                 
            })} 
        </Box>
    );
};

export default fixedExpenses;