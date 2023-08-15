import { createSlice } from '@reduxjs/toolkit';


const initialExpenseState = {expense: [], totalAmount: 0, changed:false}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState:initialExpenseState,
    reducers: {
        replaceExpense(state,action) {
            state.expense = action.payload.expense;
          
        },
        addExpenses(state,action) {
            state.changed = true;
           state.expense.push({
            ...action.payload
           })
          
        },
        
    }
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;