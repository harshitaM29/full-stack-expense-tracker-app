import { Card, Pagination  } from 'react-bootstrap';
import classes from './ExpenseList.module.css';
import ExpenseItem from './ExpenseItem';
import { Fragment } from 'react';
import { Paginate } from 'react-paginate';

const ExpenseList = (props) => {
   
    let data = Object.values(props.items || []);
    const handlePageClick = (e) => {
        console.log(e)
    }
    return (
        <Fragment>
        <Card className={classes.list}>
            <ul>
               
            {data.map((key) => (

            <ExpenseItem key={key.id} des={key.description} id={key.id}
            amount={key.amount} category={key.category} />
            ))} 
            
            </ul>
          
        </Card>
        <Paginate 
         breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={2}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        />
        </Fragment>
    )
};

export default ExpenseList;