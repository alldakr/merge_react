import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// Core Components
import LoginCard1 from 'components/argon-design/cards/LoginCard1.js';

// import imgA from "assets/argon-design/img/sections/unsplashs.jpg"
import imgA from 'assets/argon-design/img/sections/unsplashs.jpg';

function LoginPage() {
    React.useEffect(() => {
        document.body.classList.add('login-page');
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove('login-page');
        };
    });
    return (
        <>
            <div className='section-shaped my-0 skew-separator skew-mini'>
                <div className='page-header page-header-small header-filter'>
                    <div
                        className='page-header-image'
                        style={{
                            backgroundImage: imgA,
                        }}></div>
                    <Container>
                        <div className='header-body text-center mb-7'>
                            <Row className='justify-content-center'>
                                <Col className='px-5' lg='6' md='8' xl='5'>
                                    <h1 className='text-white'>Welcome!</h1>
                                    <p className='text-lead text-white'>
                                        Use these awesome forms to login or
                                        create new account in your project for
                                        free.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
            <section className='upper'>
                <Container>
                    <Col className='mx-auto' lg='5' md='8'>
                        <LoginCard1 />
                    </Col>
                </Container>
            </section>
        </>
    );
}

export default LoginPage;
