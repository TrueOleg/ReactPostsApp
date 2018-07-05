import React from 'react';   
import { connect } from 'react-redux';

import User from '../User';


class FoundUsers extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        const data = this.props.foundUsers;
        if (data) {
            const users = data.map((item) => {
                return (<li key={item.name}><User  user={item} /></li>)
            });
            return (<ul>{ users }</ul>);
            } return null;

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