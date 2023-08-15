import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
   return (
    <li>
         <ExpenseDetails id={props.id} des={props.description} amount={props.amount} category={props.category} 
          />
    </li>
   )
};

export default ExpenseItem;