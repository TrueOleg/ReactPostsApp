import React from 'react';   
import { Redirect } from 'react-router';
import { connect } from 'react-redux';  

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        if (!this.props.isAuthenticated) {
            return <Redirect to="/sign-in"/>;
        }
        return (
            <div>Home</div>
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