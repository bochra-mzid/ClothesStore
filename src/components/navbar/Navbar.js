import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css'

function NavbarSection() {
    return (
        <div className="MyNavbar">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/home">Clothes Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link eventKey={2} href="/men">Men</Nav.Link>
                        <Nav.Link eventKey={3} href="/women">Women</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}
export default NavbarSection