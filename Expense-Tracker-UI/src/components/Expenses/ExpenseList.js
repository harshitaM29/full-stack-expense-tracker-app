import { Button, Card, Pagination  } from 'react-bootstrap';
import classes from './ExpenseList.module.css';
import ExpenseItem from './ExpenseItem';
import { Fragment, useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
const ExpenseList = (props) => {
   const tokenId = localStorage.getItem('token');
    let data = Object.values(props.items || []);
    const [expenseData,setExpenseData] = useState([]);
    const currentPage = useRef();
    const [limit,setLimit] = useState(2);
    const [pageCount,setPageCount] = useState(1);
    
    useEffect(() => {
        getPaginatedValues();
        currentPage.current = 1;
    }, []);

    const handlePageClick = (e) => {
        console.log(e);
        currentPage.current = e.selected + 1;
        getPaginatedValues();
    }
    function changeLimit() {
        getPaginatedValues();
    }
   async function getPaginatedValues() {
        try {
            const response = await axios.get(`http://localhost:4000/expenses?page=${currentPage.current}&limit=${limit}`, { headers: {"Authorization" : tokenId } });
           setExpenseData(response.data.result);
           setPageCount(response.data.pageCount)
         
            
        }
    catch(error) {
                console.log(error)
            
        };
    }
   
    return (
        <Fragment>
        <input placeholder='limit' onChange={e => setLimit(e.target.value)} />
        <Button onClick={changeLimit}>Set Limit</Button>
        <Card className={classes.list}>
            <ul>
               
            {expenseData.map((key) => (

            <ExpenseItem key={key.id} des={key.description} id={key.id}
            amount={key.amount} category={key.category} />
            ))} 
            
            </ul>
          
        </Card>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
           
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
      />
        </Fragment>
    )
};

export default ExpenseList;