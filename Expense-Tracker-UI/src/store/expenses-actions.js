import { expenseActions } from './expenses';
import axios from 'axios';

export const fetchExpenseData = () => {
    return async(dispatch) => {
        const fetchData = async() => {
            const response = await axios.get(`http://localhost:4000/expenses`);
            console.log(response.data)
            
            return response.data;
        }

            try {
                
             const expenseData = await fetchData();
             dispatch(expenseActions.replaceExpense({
                expense: expenseData.expense || [],
                
             }))
            } catch (error) {
                console.log(error)
            
        };
    };
}

export const sendExpenseItems = (expense) => {
 
   const expenseData = expense.expense[0];
   console.log(expenseData)
    return async() => {
            try {
            const response = await axios.post(`http://localhost:4000/expenses`,expenseData)
            }
           catch(err) {
            console.log(err)
           }
        
    }
}