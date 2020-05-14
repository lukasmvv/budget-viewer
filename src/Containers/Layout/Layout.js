import React, {Component} from 'react';
import classes from './Layout.module.css';
//import Box from '../../Components/UI/Box/Box';
import FixedIncome from '../../Components/Inputs/FixedIncome/FixedIncome';
import FixedExpenses from '../../Components/Inputs/FixedExpenses/FixedExpenses';
import VariableExpenses from '../../Components/Inputs/VariableExpenses/VariableExpenses';
import Output from '../../Components/Outputs/Output';
import Expense from '../../Data/Expense';
import Income from '../../Data/Income.js';

class Layout extends Component {
    constructor() {
        super();
        // all state should be here
        this.state = {
            variableExpenses: [new Expense('test1',0,100000,10,['dummy label1']), new Expense('test2',0,100000,50,['dummy label2'])],
            fixedExpenses: [new Expense('fixed1',0,100000,5000,['dummy label1']), new Expense('fixed2',0,100000,6000,['dummy label2'])],
            fixedIncomes: [new Income('fixed1',0,100000,5000,['dummy label1']), new Income('fixed2',0,100000,6000,['dummy label2'])]
        }
    }

    // updates state of variable expense and to update slider value
    sliderHandler = (name, e) => {
        const varExpenses = this.state.variableExpenses;
        varExpenses.forEach((exp,i) => {
            if (exp.name===name) {
                exp.value = parseFloat(e.target.value);
                return;
            }
        });
        this.setState({variableExpenses: varExpenses});
    }

    // updates state of fixed expense and fixed input
    numberInputHandler = (name, type, e) => {
        if (type==='fixedExp') {
            const fixedExpenses = this.state.fixedExpenses;
            fixedExpenses.forEach((exp,i) => {
                if (exp.name===name) {
                    exp.value = parseFloat(e.target.value);
                    return;
                }
            });
            this.setState({fixedExpenses: fixedExpenses});
        } else if (type==='fixedInc') {
            const fixedIncomes = this.state.fixedIncomes;
            fixedIncomes.forEach((inc,i) => {
                if (inc.name===name) {
                    inc.value = parseFloat(e.target.value);
                    return;
                }
            });
            this.setState({fixedIncomes: fixedIncomes});
        }
    }

    // deletes clicked element from relevant category
    closeButtonHandler = (name, type) => {
        console.log(name);

        if (type==='varExp') {
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
        } else if (type==='fixedExp') {
            const fixedExpenses = this.state.fixedExpenses;
            let index = -1;
            fixedExpenses.forEach((exp,i) => {
                if (exp.name===name) {
                    index = i;
                    return;
                }
            });
            fixedExpenses.splice(index,1);
            this.setState({fixedExpenses: fixedExpenses});
        } else if (type==='fixedInc') {
            const fixedIncomes = this.state.fixedIncomes;
            let index = -1;
            fixedIncomes.forEach((inc,i) => {
                if (inc.name===name) {
                    index = i;
                    return;
                }
            });
            fixedIncomes.splice(index,1);
            this.setState({fixedIncomes: fixedIncomes});
        }
        
    }

    render() {
        return (
            <div className={classes.Layout}>
                <div className={classes.Inputs}>
                    <div className={classes.FixedIncome}>
                        <FixedIncome
                            fixedIncomes={this.state.fixedIncomes}
                            numberHandler={this.numberInputHandler}
                            closeClickHandler={this.closeButtonHandler}>                                
                        </FixedIncome>
                    </div>
                    
                    <div className={classes.FixedExpenses}>
                        <FixedExpenses
                            fixedExpenses={this.state.fixedExpenses}
                            numberHandler={this.numberInputHandler}
                            closeClickHandler={this.closeButtonHandler}>                                
                        </FixedExpenses>
                    </div>

                    <div className={classes.VariableExpenses}>
                        <VariableExpenses 
                            variableExpenses={this.state.variableExpenses} 
                            sliderHandler={this.sliderHandler}
                            closeClickHandler={this.closeButtonHandler}>                                
                        </VariableExpenses>
                    </div>
                </div>

                <div className={classes.Outputs}>
                    <Output
                        fixedIncomes={this.state.fixedIncomes}
                        fixedExpenses={this.state.fixedExpenses}
                        variableExpenses={this.state.variableExpenses}>                            
                    </Output>
                </div>
            </div>
        );
    }
}

export default Layout;