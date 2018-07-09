import React from 'react';   
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';  

import * as Token from '../../servises/Token';
import * as actions from '../../redux/actions/authAction'; 
import * as usersActions from '../../redux/actions/searchUsers';  
import FoundUsers from '../FoundUsers';
import MyPosts from '../MyPosts';
import FriendsPosts from '../FriendsPosts';
import NewPost from '../NewPost';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.list = null;
        this.state = {
            credentials: {name: ''},
            isOpen: false
        };
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        const token   = localStorage.getItem('token');
            if (token) {
                props.setToken({
                    token
                });
            }
    }

    componentDidMount() {
        document.addEventListener('click', (e) => {this.hideList(e)});
        this.list = document.getElementById('list');
        
    }

    hideList(e) {
        const list = this.list;
        if (list && !list.contains(e.target)) {
            this.setState({
              isOpen: false
            })
          }
    }

    logOut() {
        Token.clearToken();
        location.reload();
    }

    onFocus() {
        this.setState({
            isOpen: true
        });
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        this.setState({
            credentials: credentials,
        });
        return this.props.searchUsersDebounced(this.state.credentials.name);
    }
    
    render () {
        const token = localStorage.getItem('token');

        if (!this.props.isAuthenticated && !token) {
            return <Redirect to="/sign-in"/>;
        }

        const list = this.state.isOpen ? <FoundUsers /> : null;
        
        return (
                <div>
                    <h1>Home</h1>
                    <button onClick={this.logOut}>Log-out</button>
                    <div id="list">
                        <input
                            type = "text"
                            name = "name" 
                            value={this.state.credentials.name}
                            onChange = {this.onChange}
                            onBlur = {this.onBlur}
                            onFocus = {this.onFocus}
                        />
                        
                        {list}
                    </div>
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
        isAuthenticated: state.auth.user.isAuthenticated,
        foundUsers: state.users.data
    };
  };

const mapDispatchToProps = (dispatch) => ({
    setToken: (data) => dispatch(actions.isLogin(data)),
    searchUsersDebounced: (data) => dispatch(usersActions.searchUsersDebounced(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);