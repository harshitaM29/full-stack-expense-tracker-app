import { createSlice } from '@reduxjs/toolkit';


const initialExpenseState = {expense: [], totalAmount: 0, changed:false}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState:initialExpenseState,
    reducers: {
        replaceExpense(state,action) {
            state.expense = action.payload.expense.result;
          
        },
        addExpenses(state,action) {
            state.changed = true;
           state.expense.push({
            ...action.payload
           })
          
        },
        deleteExpense(state,action) {
            state.changed = true;
                state.expense = state.expense.filter(item => item.id !== action.payload)
       
    },
        
    }
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;