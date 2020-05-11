import React, {Component} from 'react';
import classes from './Layout.module.css';
//import Box from '../../Components/UI/Box/Box';
import FixedIncome from '../../Components/Inputs/FixedIncome/FixedIncome';
import FixedExpenses from '../../Components/Inputs/FixedExpenses/FixedExpenses';
import VariableExpenses from '../../Components/Inputs/VariableExpenses/VariableExpenses';
import Output from '../../Components/Outputs/Output';

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            test: true
        }
    }

    render() {
        return (
            <div className={classes.Layout}>
                <div className={classes.Inputs}>
                    <div className={classes.FixedIncome}>
                        <FixedIncome></FixedIncome>
                    </div>
                    
                    <div className={classes.FixedExpenses}>
                        <FixedExpenses></FixedExpenses>
                    </div>

                    <div className={classes.VariableExpenses}>
                        <VariableExpenses></VariableExpenses>
                    </div>
                </div>

                <div className={classes.Outputs}>
                    <Output></Output>
                </div>
            </div>
        );
    }
}

export default Layout;