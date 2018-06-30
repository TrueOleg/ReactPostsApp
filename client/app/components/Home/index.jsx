import React from 'react';   
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'  


import MyPosts from '../MyPosts';
import AllPosts from '../AllPosts';
import NewPost from '../NewPost';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        if (!this.props.isAuthenticated) {
            return <Redirect to="/sign-in"/>;
        }
        return (
            <Router>
                <div>
                    <h1>Home</h1>
                    <input
                    type = "text"
                    />
                    <br />
                    <ul>
                        <li><Link to="/my-posts">MyPosts</Link></li>
                        <li><Link to="/all-posts">AllPosts</Link></li>
                        <li><Link to="/new-post">NewPost</Link></li>
                    </ul>

                    <hr/>

                    <Route path="/my-posts" component={MyPosts}/>
                    <Route path="/all-posts" component={AllPosts}/>
                    <Route path="/new-post" component={NewPost}/>
                </div>
            </Router>    
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.user.isAuthenticated
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);