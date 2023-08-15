import NewExpense from "../components/NewExpenses/NewExpense";
import {useDispatch, useSelector} from 'react-redux';
import { expenseActions } from '../store/expenses';
import { Fragment } from "react";
import ExpenseList from "../components/Expenses/ExpenseList";
import { sendExpenseItems } from "../store/expenses-actions";
const HomePage = () => {
    const dispatch = useDispatch();
    const receivedExpenses = useSelector(state => state.expense.expense)
    const addExpenseHandler = expense => {
        dispatch(sendExpenseItems(expense));
    }
    let expenses = []
    if(receivedExpenses !== null){
        expenses = receivedExpenses;
    }
    console.log("received",expenses)
    return (
        <Fragment>
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpenseList items={(receivedExpenses !== null) ? receivedExpenses : ''} />
        </Fragment>
    )
};

export default HomePage;