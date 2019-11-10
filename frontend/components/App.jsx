import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import StockDetailsContainer from './stock/stock_details_container';
import PortfolioContainer from './portfolio/portfolio_container';

const App = () => (
    <div className='main-div'>
        <header>
            <GreetingContainer />
        </header>
        <Route exact path='/' component={SplashContainer} />
        <Route exact path='/portfolio' component={PortfolioContainer} />
        <Route exact path='/stocks' component={StockDetailsContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
);

export default App;