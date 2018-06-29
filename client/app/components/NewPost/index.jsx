import React from 'react';   
import { Redirect } from 'react-router';
import { connect } from 'react-redux';  

class NewPost extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <div>NewPost</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);