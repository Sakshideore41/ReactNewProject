import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';

function Header() {
    const { isUserLoggedIn, name } = useContext(DataContext);

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/Home">EMS</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Emplist">View All Employees</Nav.Link>
                    <Nav.Link as={Link} to="/ReduxEmplist">View All Redux Employees</Nav.Link>
                    <Nav.Link as={Link} to="/AddEmployee">Add New Employees</Nav.Link>
                    <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
                    {!isUserLoggedIn ? (
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                    ) : (
                        <Nav.Link as={Link} to="/Logout">Logout</Nav.Link>
                    )}
                </Nav>
                <Navbar.Brand>Hello {name || 'Guest'}</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
