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
        // all state should be here
        this.state = {
            variableExpenses: [{
                name: 'groceries',
                min: 100,
                max: 300,
                value: 200
            }]
        }
    }

    sliderHandler = (e) => {
        console.log(e);
        const newExp = {
            name: 'groceries',
            min: 100,
            max: 300,
            value: e.target.value
        };
        this.setState({variableExpenses: [newExp]});
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
                        <VariableExpenses varExpenses={this.state.variableExpenses} sliderHandler={this.sliderHandler}></VariableExpenses>
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