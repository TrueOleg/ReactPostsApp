import React from 'react';   
import { Redirect } from 'react-router';
import { connect } from 'react-redux';  

import * as actions from '../../redux/actions';


class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }
    
    render () {
        
        const { post } = this.props;
        
        return (
            <ul>
                <li>{post.title}</li>
                <li>{post.content}</li>
                <li>{post.date}</li>
            </ul>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);