import { expenseActions } from './expenses';
import axios from 'axios';

const token = localStorage.getItem('token');

export const fetchExpenseData = () => {
    return async(dispatch) => {
        const fetchData = async() => {
            const response = await axios.get(`http://localhost:4000/expenses`, { headers: {"Authorization" : token } });
            
            return response.data;
        }

            try {
                
             const expenseData = await fetchData();
            
             dispatch(expenseActions.replaceExpense({
                expense: expenseData || [],
                
             }))
            } catch (error) {
                console.log(error)
            
        };
    };
}

export const sendExpenseItems = (expense) => {
 
    return async(dispatch) => {
            try {
            const response = await axios.post(`http://localhost:4000/expenses`,{ headers: {"Authorization" : token } },expense)
               dispatch(expenseActions.addExpenses(response.data))
            }
           catch(err) {
            console.log(err)
           }
        
    }
}

export const deleteExpenseItems = (id) => {
    return async(dispatch) => {
        const deleteData = async() => {
            const response = await axios.delete(`http://localhost:4000/expense-delete/${id}`, { headers: {"Authorization" : token }});
            
            return response.data;
        }
        try {
                
            const expenseData = await deleteData();
            dispatch(expenseActions.deleteExpense(expenseData.id))
           } catch (error) {
               console.log(error)
           
       };
    
}
}

