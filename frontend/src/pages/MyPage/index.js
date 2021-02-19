import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';

import Dashboard from './Dashboard';

export default function MyPage() {
    return (
        <div>
            <div className='section section-js-components'>
                <Container>
                    <Dashboard />
                </Container>
            </div>
        </div>
    );
}
