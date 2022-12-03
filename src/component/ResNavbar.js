import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { NavLink } from 'react-router-dom'

function ResNavbar() {
    return (
        <div className='main-nav' >


            <Navbar collapseOnSelect expand="lg" bg="" >

                <Container>
                    <Navbar.Brand href="" className='nav-brand'>ST..Developers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">


                        </Nav>

                        <Nav >

                            <NavLink to="home" className='nav-links' >Home</NavLink>

                        </Nav>
                        <Nav>

                            <NavLink to="about" className='nav-links'>About</NavLink>

                        </Nav>
                        <Nav>
                            <NavLink to="services" className='nav-links'>Services</NavLink>

                        </Nav>
                        <Nav>
                            <NavLink to="contact" className='nav-links'>Contact</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    );
}

export default ResNavbar;