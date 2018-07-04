import React from 'react';  
import { connect } from 'react-redux';  

import * as usersActions from '../../redux/actions/searchUsers';  
import star from '../../img/icons8-звезда-50.png';


class User extends React.Component {
    constructor(props) {
        super(props)
    }

    click = () => {
        this.props.user.followerid 
        ? this.props.unsubscribe(this.props.user.id)
        : this.props.subscribe(this.props.user.id);
    }
    
    render () {
        
        return (
            <p onClick={this.click}>{this.props.user.name}<img onClick={this.click} src={star}/></p>
        );
    }
}


const mapStateToProps = (state) => {
    return {
      
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (id) => dispatch(usersActions.subscribe(id)),
        unsubscribe: (id) => dispatch(usersActions.unsubscribe(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);