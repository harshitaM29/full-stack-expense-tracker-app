import { Card } from 'react-bootstrap';
import classes from './ExpenseList.module.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    let data = Object.values(props.items || []);
    return (
        <Card className={classes.list}>
            <ul>
            {data.map((key) => (

            <ExpenseItem key={key.id} des={key.description} id={key.id}
            amount={key.amount} category={key.category} />
            ))} 
            </ul>
        </Card>
    )
};

export default ExpenseList;