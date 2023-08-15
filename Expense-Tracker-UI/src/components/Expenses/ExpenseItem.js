import ExpenseDetails from "./ExpenseDetails";
import {useDispatch} from 'react-redux';
import { deleteExpenseItems } from "../../store/expenses-actions";
const ExpenseItem = (props) => {
    const dispatch = useDispatch()
    const removeExpenses = (id) => {
       dispatch(deleteExpenseItems(id));
    }

   return (
    <li>
         <ExpenseDetails id={props.id} des={props.des} amount={props.amount} category={props.category} 
          onRemove={removeExpenses.bind(null,props.id)} />
    </li>
   )
};

export default ExpenseItem;