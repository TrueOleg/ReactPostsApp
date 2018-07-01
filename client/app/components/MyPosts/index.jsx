import React from 'react';   
import { Redirect } from 'react-router';
import { connect } from 'react-redux';  

import * as actions from '../../redux/actions';


class MyPosts extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getMyPosts()
    }
    
    render () {
        return (
            <div>MyPosts</div>
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
        getMyPosts: () => dispatch(actions.getMyPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);