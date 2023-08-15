import { Button, Container } from 'react-bootstrap';
import classes from './ExpenseItem.module.css';
import { Fragment } from 'react';

const ExpenseDetails = (props) => {
    return (
        <Fragment>
        <Container className={classes.description}>
       <h2>{props.des}</h2>
            <h2>{props.category}</h2>
            
            <Container className={classes.price}>{props.amount}</Container>
       
        </Container>
        <Container className={classes.action}>
            
            <Button onClick={props.onRemove}>Delete</Button>
          
            </Container> 

            </Fragment> 
    )
};

export default ExpenseDetails;