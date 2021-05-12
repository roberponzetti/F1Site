import React from 'react'
import '../../styles/styles.css';
import imgLogo from '../../img/F1-logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const MainMenuNav = () => (
    <header>
        <>
        <Navbar id="mainNav" bg="dark" variant="dark" expand="lg">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Brand href="/">
                <img
                    src={imgLogo}
                    width="128"
                    height="72"
                    className="d-inline-block align-top"
                    alt="F1 logo"
                />
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/noticias">Noticias</Nav.Link>
                <Nav.Link href="/posiciones">Posiciones</Nav.Link>
                <Nav.Link href="/pilotos">Pilotos</Nav.Link>
                <Nav.Link href="/equipos">Equipos</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </>
    </header>
)

export default MainMenuNav