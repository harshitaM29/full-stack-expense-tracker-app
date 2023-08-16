import classes from './Header.module.css';
import { Container, Button, Nav, NavDropdown, Navbar, Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../store/order-actions';
import useRazorpay from "react-razorpay";
const Header = () => {
    const [Razorpay] = useRazorpay();
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(createOrder(Razorpay));
        e.preventDefault();
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className={classes.nav}>
        <Container fluid>
          <Navbar.Brand href="#">Expense Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link> */}
              
            </Nav>
            
              <Button onClick={handleClick}>Buy Premium</Button>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};

export default Header;