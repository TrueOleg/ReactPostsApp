import React from 'react';   
import { Redirect } from 'react-router';
import { connect } from 'react-redux';  

import * as actions from '../../redux/actions';
import ListPosts from '../ListPosts';


class MyPosts extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getMyPosts()
    }

    
    render () {
        
        if (this.props.myPosts.length === 0) {
            return (
                    <div>
                        <h1>Myposts</h1>
                    </div>
                    );
        } else {
            return (
                <React.Fragment>
                <h1>MyPosts</h1>
                <ListPosts myPosts={this.props.myPosts}/>
                </React.Fragment>
            )
        }
        
        
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.user.isAuthenticated,
        myPosts: state.posts.myPosts
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        getMyPosts: () => dispatch(actions.getMyPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);