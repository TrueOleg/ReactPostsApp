import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, IndexRoute } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../components/App';
import LogInPage from '../components/LogInPage';
import store from './store';

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={LogInPage} exact />
          {/* <IndexRoute component={Home} />
          <Route path="login" component={LogInPage} exact /> */}
      </Router>
    </Provider>  
  );
};

export default Root;

