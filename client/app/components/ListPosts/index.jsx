import React from 'react';   
import { Redirect } from 'react-router';
import { connect } from 'react-redux';  


import Post from '../Post';



class ListPosts extends React.Component {
    constructor(props) {
        super(props)
    }

   
    
    render () {
        const { posts } = this.props;
            const comp = posts.map((item) => {return (<li key={item.title}><Post  post={item} /></li>)});
            return (
                <div>
                    <ul>{comp}</ul>
                </div>
            )
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);