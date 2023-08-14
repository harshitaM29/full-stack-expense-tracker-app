import classes from './Login.module.css';
import { Form, Button, ButtonGroup, Card } from 'react-bootstrap';
import { useState, useRef } from 'react';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const switchAuthModeHandler = () => {
        history.push('/signup')
    };
    const signInHandler = async(e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const loginData = {
          email:enteredEmail,
          password:enteredPassword
        }
        alert('logged in succeful');
       // setIsLoading(true);
        // try {
        // const response = await axios.post('http://localhost:4000/signup',signupData);
        //   setIsLoading(false)
        // } catch(err) {
        //   setIsLoading(false);
        //   emailInputRef.current.value = "";
        //   if(err.response.data === 'SequelizeUniqueConstraintError') {
        //     alert('Email id already present');

        //   }

        
        
    }
    return (
        <Card className={classes.auth}>
        <h1>Sign Up</h1>
    <Form onSubmit={signInHandler}>
  <Form.Group className={classes.control} controlId="email">
    <Form.Label>Email address</Form.Label>
    <input ref={emailInputRef} required type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className={classes.control} controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <input ref={passwordInputRef} type="password" placeholder="Password" required/>
  </Form.Group>
    <ButtonGroup  className={classes.actions} vertical>
    {isLoading && <Button  className={classes.toggle} type="button">
      Sending Request
  </Button>}
    {!isLoading && <Button variant="primary" type="submit">
       Login
  </Button> }
  <Button className={classes.toggle} onClick={switchAuthModeHandler} type="button">
  Create new account
  </Button>
  </ButtonGroup>
    </Form>
    </Card> 
    )
};

export default Login;