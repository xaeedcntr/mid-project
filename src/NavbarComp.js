import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Navbar.css';
import { Link, NavLink } from 'react-router-dom';



function NavbarComponent() {
  return (
   <>
    <Navbar id="nav" expand="lg" variant="grey">
      <Container>
        <Navbar.Brand href="#home">URL Shortner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to= "/" className='.nav-link'>Home</Nav.Link>
            <Nav.Link  as={Link} to= "/history" className='.nav-link'>History</Nav.Link>
            
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
    
  );
}

export default NavbarComponent;