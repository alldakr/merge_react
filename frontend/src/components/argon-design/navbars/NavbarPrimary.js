import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// reactstrap components
import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from 'reactstrap';

import ImgA from 'assets/argon-design/img/DataMarketingCampus_Logo.png';

// Core Components
function NavbarPrimary() {
    const history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    };

    const [collapseOpen, toggleCollapseOpen] = React.useState(false);
    return (
        <>
            <Navbar className='navbar-dark bg-primary' expand='xl'>
                <Container>
                    <NavbarBrand onClick={() => handleClick('/')}>
                        <img alt='..' src={ImgA} />
                    </NavbarBrand>
                    <button
                        className='navbar-toggler'
                        onClick={() => toggleCollapseOpen(!collapseOpen)}>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <Collapse isOpen={collapseOpen} navbar>
                        <div className='navbar-collapse-header'>
                            <Row>
                                <Col className='collapse-brand' xs='1'>
                                    <Link to='/index'>
                                        <img alt='...' src={ImgA} />
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
                        <Nav className='ml-lg-auto' navbar>
                            <NavItem>
                                <NavLink onClick={() => handleClick('/')}>
                                    {/* <i className='ni ni-align-center text-info'></i> */}
                                    Main
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => handleClick('/intro')}>
                                    {/* <i className='ni ni-settings text-danger'></i> */}
                                    캠퍼스 소개
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => handleClick('/customEdu')}>
                                    {/* <i className='ni ni-align-left-2 text-puple'></i> */}
                                    기업 맞춤 교육
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => handleClick('/offlineEdu')}>
                                    오프라인
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => handleClick('/onlineEdu')}>
                                    온라인
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => handleClick('/dmkHall')}>
                                    데마코홀 대관
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => handleClick('/community')}>
                                    커뮤니티
                                </NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink onClick={() => handleClick('/mypage')}>
                                    My Page
                                </NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink onClick={() => handleClick('/login')}>
                                    로그인
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => handleClick('/signup')}>
                                    회원가입
                                </NavLink>
                            </NavItem>

                            {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  id="navbar-primary_dropdown_1"
                  nav
                  role="button"
                >
                  Settings
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbar-primary_dropdown_1" right>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Action
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Another action
                  </DropdownItem>
                  <DropdownItem divider></DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Something else here
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarPrimary;
