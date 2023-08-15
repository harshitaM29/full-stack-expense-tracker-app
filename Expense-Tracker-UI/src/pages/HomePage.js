import NewExpense from "../components/NewExpenses/NewExpense";
import {useDispatch, useSelector} from 'react-redux';
import { expenseActions } from '../store/expenses';
import { Fragment } from "react";
import ExpenseList from "../components/Expenses/ExpenseList";
const HomePage = () => {
    const dispatch = useDispatch();
    const receivedExpenses = useSelector(state => state.expense.expense)
    const addExpenseHandler = expense => {
        dispatch(expenseActions.addExpenses(expense));
    }
    let expenses = []
    if(receivedExpenses !== null){
        expenses = receivedExpenses;
    }
    return (
        <Fragment>
        <NewExpense  onAddExpense={addExpenseHandler} />
        <ExpenseList items={(receivedExpenses !== null) ? receivedExpenses : ''} />
        </Fragment>
    )
};

export default HomePage;