import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, IndexRoute, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../components/App';
import SignUpPage from '../components/SignUpPage';
import SignInPage from '../components/SignInPage';
import Home from '../components/Home';

import store from './store';


const Root = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Switch>
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/" render={ props => <Home {...props} />}/>
        </Switch>
      </Router>
    </Provider>  
  );
};

export default Root;

