import React from 'react';
import { Route } from 'react-router-dom';
import Profile from './Profile';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import LoginRequiredRoute from 'utils/LoginRequiredRoute';

function MyPageRoutes({ match }) {
    console.log('match: ', match);
    return (
        <>
            <LoginRequiredRoute>
                <Route
                    exact
                    path={match.url + '/profile'}
                    component={Profile}
                />
            </LoginRequiredRoute>
            <Route exact path={match.url + '/login'} component={Login} />
            <Route exact path={'/signup'} component={Signup} />
        </>
    );
}

export default MyPageRoutes;
