import React from 'react';   
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';  


import * as actions from '../../redux/actions/authAction'; 
import * as debounceActions from '../../redux/actions/searchUsers';  
import MyPosts from '../MyPosts';
import FriendsPosts from '../FriendsPosts';
import NewPost from '../NewPost';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state    = {credentials: {name: ''}};
        this.onChange = this.onChange.bind(this);
        const token   = localStorage.getItem('token');
            if (token) {
                props.setToken({
                    token
                });
            }
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        this.setState({credentials: credentials});
        return this.props.searchUsersDebounced(this.state.credentials.name);
      }
    
    render () {
        const token = localStorage.getItem('token');

        if (!this.props.isAuthenticated && !token) {
            return <Redirect to="/sign-in"/>;
        }
        return (
                <div>
                    <h1>Home</h1>
                    <input
                    type = "text"
                    name = "name" 
                    value={this.state.credentials.name}
                    onChange = {this.onChange}
                    />
                    <br />
                    <ul>
                        <li><Link to="/my-posts">MyPosts</Link></li>
                        <li><Link to="/friend-posts">FriendsPosts</Link></li>
                        <li><Link to="/new-post">NewPost</Link></li>
                    </ul>

                    <hr/>

                    <Route path="/my-posts" render={ props => <MyPosts {...props}/>}/>
                    <Route path="/friend-posts" component={FriendsPosts}/>
                    <Route path="/new-post" component={NewPost}/>
                </div> 
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.user.isAuthenticated
    };
  };

const mapDispatchToProps = (dispatch) => ({
    setToken: (data) => dispatch(actions.isLogin(data)),
    searchUsersDebounced: (data) => dispatch(debounceActions.searchUsersDebounced(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);