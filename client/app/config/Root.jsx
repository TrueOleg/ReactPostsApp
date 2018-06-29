import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, IndexRoute, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../components/App';
import RegistrationPage from '../components/RegistrationPage';
import LogInPage from '../components/LogInPage';
import Home from '../components/Home';

import store from './store';


const Root = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sign-in" component={LogInPage} />
        <Route path="/sign-up" component={RegistrationPage} />
        </Switch>
      </Router>
    </Provider>  
  );
};

export default Root;

