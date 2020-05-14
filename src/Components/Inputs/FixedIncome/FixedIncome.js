import React from 'react';
//import classes from './FixedIncome.module.css';
import Box from '../../../Components/UI/Box/Box';
import FixedInput from '../../UI/FixedInput/FixedInput';
import Element from '../../Element/Element';

const fixedIncome = (props) => {
    const type = 'fixedInc';
    return (
        <Box heading={"Fixed Income"}>
            <p>fixed income</p>
            {props.fixedIncomes.map((exp, i) => {
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

//test git
export default fixedIncome;