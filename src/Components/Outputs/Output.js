import React from 'react';
//import classes from './Output.module.css';
import Box from '../UI/Box/Box';

const output = (props) => {
    const totalIncome = props.fixedIncomes.map(inc => inc.value).reduce((a, b) => a + b, 0);
    const totalFixedExp = props.fixedExpenses.map(exp => exp.value).reduce((a, b) => a + b, 0);
    const totalVarExp = props.variableExpenses.map(exp => exp.value).reduce((a, b) => a + b, 0);
    const totalExp = totalFixedExp + totalVarExp;
    const net = totalIncome - totalExp;
    return (
        <Box heading={"Output"}>
            <p>outputs</p>
            <p>Total income: {totalIncome}</p>
            <p>Total expenses: {totalExp}</p>
            <p>Total fixed expenses: {totalFixedExp}</p>
            <p>Total variable expenses: {totalVarExp}</p>            
            <p>Total NET: {net}</p>
        </Box>
    );
};

export default output;