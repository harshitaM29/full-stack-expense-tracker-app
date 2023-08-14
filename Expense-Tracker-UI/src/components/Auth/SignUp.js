import classes from './SignUp.module.css';
import { Form, Button, Container, ButtonGroup, Card } from 'react-bootstrap';
import { useState, useRef } from 'react';
const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const nameInputRef = useRef();
    const signUpHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredName = nameInputRef.current.value;
       
        
        console.log(enteredEmail,enteredPassword,enteredName)
    }
    return (
        <Card className={classes.auth}>
            <h1>Sign Up</h1>
        <Form onSubmit={signUpHandler}>
            <Form.Group className={classes.control} controlId="name">
        <Form.Label>Name</Form.Label>
        <input ref={nameInputRef} required type="text" placeholder="Enter Name"  />
      </Form.Group>
      <Form.Group className={classes.control} controlId="email">
        <Form.Label>Email address</Form.Label>
        <input ref={emailInputRef} required type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className={classes.control} controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <input ref={passwordInputRef} type="password" placeholder="Password" required/>
      </Form.Group>
        <ButtonGroup  className={classes.actions} vertical>
        {isLoading && <p>Sending Request</p>}
        {!isLoading && <Button variant="primary" type="submit">
            Create Account
      </Button> }
      <Button  className={classes.toggle} type="button">
            Login with existing account
      </Button>
      </ButtonGroup>
        </Form>
        </Card>
    )
};

export default SignUp;