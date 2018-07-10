import React from 'react';   
import { connect } from 'react-redux';

import User from '../User';

class FoundUsers extends React.Component {

    render() {

        const data = this.props.foundUsers;
        
        {data.map((item) => {
                return (<li key={item.name}><User  user={item} /></li>);
        })};

    }
}


const mapStateToProps = (state) => {
    return {
        foundUsers: state.users.users
    };
  };

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(FoundUsers);