import classes from './Report.module.css';
import Header from '../Layout/Header';
import { Container, Table, Button } from 'react-bootstrap';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
const Report = () => {
    const token = localStorage.getItem('token');
    const [data,setData] = useState();
    useEffect(() => {

    })
    const downloadReport = async() => {
        try {
            const response = await axios.get('http://localhost:4000/user/download', { headers: {"Authorization" : token } })
            console.log(response)
            if(response.status === 200) {
                var a = document.createElement('a');
                a.href = response.data.fileURL;
                a.download = 'myexpense.csv';
                a.click();
            } else {
                throw new Error(response.data.message)
            }
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <Fragment>
        <Header />
        <Container className={classes.report} >
        <h2>Day to Day Expenses</h2>
        <Button onClick={downloadReport}>Download Report</Button>
        
      </Container>
        </Fragment>
    )
};

export default Report;