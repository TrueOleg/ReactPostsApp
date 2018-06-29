import React from 'react';   
import { Redirect } from 'react-router';
import { connect } from 'react-redux';  

import PostsCont from '../PostsCont';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        if (!this.props.isAuthenticated) {
            return <Redirect to="/sign-in"/>;
        }
        return (
            <div>
                <h1>Home</h1>
                <input
                  type = "text"
                  />
                <br />
                <button>MyPosts</button>
                <button>AllPosts</button>
                <button>NewPost</button>
                <PostsCont />  
            </div>
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