import React, {Component} from 'react';
import classes from './Layout.module.css';
//import Box from '../../Components/UI/Box/Box';
import FixedIncome from '../../Components/Inputs/FixedIncome/FixedIncome';
import FixedExpenses from '../../Components/Inputs/FixedExpenses/FixedExpenses';
import VariableExpenses from '../../Components/Inputs/VariableExpenses/VariableExpenses';
import Output from '../../Components/Outputs/Output';
import Expense from '../../Data/Expense';

class Layout extends Component {
    constructor() {
        super();
        // all state should be here
        this.state = {
            variableExpenses: [new Expense('test1',0,100000,10,['dummy label1']), new Expense('test2',0,100000,50,['dummy label2'])]
        }
    }

    // handles slider input change for variable input
    sliderHandler = (name, e) => {
        const varExpenses = this.state.variableExpenses;
        varExpenses.forEach((exp,i) => {
            if (exp.name===name) {
                exp.value = e.target.value;
                return;
            }
        });
        this.setState({variableExpenses: varExpenses});
    }

    closeButtonHandler = (name) => {
        console.log(name);
        
        const varExpenses = this.state.variableExpenses;
        let index = -1;
        varExpenses.forEach((exp,i) => {
            if (exp.name===name) {
                index = i;
                return;
            }
        });
        varExpenses.splice(index,1);
        this.setState({variableExpenses: varExpenses});
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
                        <VariableExpenses 
                            variableExpenses={this.state.variableExpenses} 
                            sliderHandler={this.sliderHandler}
                            closeClickHandler={this.closeButtonHandler}></VariableExpenses>
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