import React from 'react';   
import { Redirect } from 'react-router';
import { connect } from 'react-redux';  

class AllPosts extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <div>AllPosts</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);