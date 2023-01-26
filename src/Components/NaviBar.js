import React from "react";
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function NaviBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand >Webdev blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/">Users</Link></Nav.Link>
                        <Nav.Link><Link to="/">About</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="mr-2">Log in</Button>
                        <Button variant="primary">Sign out</Button>




                        <Button variant="primary" className="mr-2">Log in</Button>
                        <Button variant="primary">Sign out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>)
    }