import React from 'react'
import "./NavBar.scss"
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import logo from "../../../images/logo.png"
import mail from "../../../images/mail.png"
import settings from "../../../images/settings.png"
import notification from "../../../images/notification.png"
import profile from "../../../images/profile.png"
import search from "../../../images/search.png"
import { Container, Nav, Navbar } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <>
            <Navbar expand="sm" className='p-o'>
                <Container fluid>
                    <Link className="navbar-brand" to="/dashboard"><img src={logo} alt="" className="logo me-3 ms-1" /></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse  className='d-sm-block flex-column flex-sm-row-reverse justify-content-between' id="navbarScroll">
                        <Nav
                            className="my-2 my-lg-0 d-flex flex-row justify-content-center justify-content-sm-end align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#" className='p-0 d-inline-block'>
                                <img src={mail} alt="" className="navbar-rifht-img mx-1" />
                            </Nav.Link>
                            <Nav.Link href="#" className='p-0 d-inline-block'>
                                <img src={settings} alt="" className="navbar-rifht-img mx-1" />
                            </Nav.Link>
                            <Nav.Link href="#" className='p-0 d-inline-block'>
                                <img src={notification} alt="" className="navbar-rifht-img mx-1" />
                            </Nav.Link>
                            <Nav.Link href="#" className='p-0 d-inline-block'>
                                <img src={profile} alt="" className="navbar-rifht-img mx-3" />
                            </Nav.Link>
                        </Nav>
                        <Form className="position-relative searchbar">
                            <Form.Label className='position-absolute d-flex align-items-center mb-0 top-50 start-0 translate-middle-y ps-2'>
                                <img src={search} alt="" className="search-img" />
                            </Form.Label>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
