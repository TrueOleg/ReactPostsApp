import React from 'react';   
import { connect } from 'react-redux';  

import { formLogin } from '../style';
import * as actions from '../../redux/actions';


class LogInPage extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {credentials: {login: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.logInUser(this.state.credentials);
  }

  render() {
    return (
        <form style = { formLogin }>
          <h1>Login</h1>
          <p>Enter login</p>
          <input
            name  = "login"
            label = "login"
            value={this.state.credentials.login}
            onChange={this.onChange}
            />
          <br />
          <p>Enter password</p>
          <input
            name  = "password"
            label = "password"
            type  = "password"
            value={this.state.credentials.password}
            onChange={this.onChange}
            />
          <br />
          <input
            type      = "submit"
            className = "btn btn-primary"
            value     = "Login"
            onClick={this.onSave}
            />
        </form>   
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logInUser: (data) => dispatch(actions.logInUser(data))
    };
  };


export default connect(null, mapDispatchToProps)(LogInPage);