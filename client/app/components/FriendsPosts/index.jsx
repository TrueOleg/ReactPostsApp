import React from 'react';   
import { Redirect } from 'react-router';
import { connect } from 'react-redux';  

import * as actions from '../../redux/actions';


class FriendsPosts extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.getFriendsPosts()
    }

    render () {
        return (
            <div>FriendsPosts</div>
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
        getFriendsPosts: () => dispatch(actions.getFriendsPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPosts);