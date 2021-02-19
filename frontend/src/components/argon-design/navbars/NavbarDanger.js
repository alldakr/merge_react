import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from 'reactstrap';

// Core Components

function NavbarDanger() {
    const [collapseOpen, toggleCollapseOpen] = React.useState(false);
    return (
        <>
            <Navbar className='navbar-dark bg-danger' expand='lg'>
                <Container>
                    <NavbarBrand
                        href='#pablo'
                        onClick={(e) => e.preventDefault()}>
                        Danger Color
                    </NavbarBrand>
                    <button
                        className='navbar-toggler'
                        onClick={() => toggleCollapseOpen(!collapseOpen)}>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <Collapse isOpen={collapseOpen} navbar>
                        <div className='navbar-collapse-header'>
                            <Row>
                                <Col className='collapse-brand' xs='6'>
                                    <Link to='/index'>
                                        <img
                                            alt='...'
                                            src={require('assets/argon-design/img/brand/blue.png')}></img>
                                    </Link>
                                </Col>
                                <Col className='collapse-close' xs='6'>
                                    <button
                                        className='navbar-toggler'
                                        onClick={() =>
                                            toggleCollapseOpen(!collapseOpen)
                                        }>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink
                                    className='nav-link-icon'
                                    href='#pablo'
                                    onClick={(e) => e.preventDefault()}>
                                    <i className='fab fa-facebook-square'></i>
                                    <span className='nav-link-inner--text d-lg-none'>
                                        Facebook
                                    </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className='nav-link-icon'
                                    href='#pablo'
                                    onClick={(e) => e.preventDefault()}>
                                    <i className='fab fa-twitter'></i>
                                    <span className='nav-link-inner--text d-lg-none'>
                                        Twitter
                                    </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className='nav-link-icon'
                                    href='#pablo'
                                    onClick={(e) => e.preventDefault()}>
                                    <i className='fab fa-google-plus'></i>
                                    <span className='nav-link-inner--text d-lg-none'>
                                        Google +
                                    </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className='nav-link-icon'
                                    href='#pablo'
                                    onClick={(e) => e.preventDefault()}>
                                    <i className='fab fa-instagram'></i>
                                    <span className='nav-link-inner--text d-lg-none'>
                                        Instagram
                                    </span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarDanger;
