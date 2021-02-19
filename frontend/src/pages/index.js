import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavbarPrimary from 'components/argon-design/navbars/NavbarPrimary.js';
import Footer6 from 'components/argon-design/footers/Footer6.js';

import Home from './Main';
import DMKHallPage from './DMKHall';
import CustomEducPage from './CustomEducation';
import OfflineEduPage from './OfflineEducation';
import OnlineEduPage from './OnlineEducation';
import CommunityPage from './Community';
import IntroPage from './Intro';
import MyPage from './MyPage';
import Sample from './About';
import LoginPage from './Auth/Login';
import Signup from './Auth/Signup';
import LoginRequiredRoute from 'utils/LoginRequiredRoute';

import Login from './accounts/Login';

import AdminLayout from 'layouts/Admin.js';
import RTLLayout from 'layouts/RTL.js';
import AuthLayout from 'layouts/Auth.js';
// import IndexView from 'views/Index.js';

function Root() {
  React.useEffect(() => {
    document.body.classList.add('index-page');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    if (
      window.location.href.lastIndexOf('#') > 0 &&
      document.getElementById(href)
    ) {
      document.getElementById(href).scrollIntoView();
    }
    return function cleanup() {
      document.body.classList.remove('index-page');
    };
  });
  return (
    <React.Fragment>
      <NavbarPrimary type='transparent' />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/intro' component={IntroPage} />
        <Route exact path='/customEdu' component={CustomEducPage} />
        <Route exact path='/offlineEdu' component={OfflineEduPage} />
        <Route exact path='/onlineEdu' component={OnlineEduPage} />
        <Route exact path='/dmkhall' component={DMKHallPage} />
        <Route exact path='/community' component={CommunityPage} />
        <LoginRequiredRoute exact path='/posts/new' component={Home} />
        <LoginRequiredRoute exact path='/mypage' component={MyPage} />
        <Route
          exact
          path='/mypage'
          render={(props) => <AdminLayout {...props} />}
        />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/sample' component={Sample} />
        <Route exact path='/test_login' component={Login} />
        <Redirect from='*' to='/' />
      </Switch>
      {/* <Footer6 /> */}
    </React.Fragment>
  );
}

export default Root;
