import React, { Component } from 'react'
//class to display post
class Post extends Component{
    state ={
        id : null
    }
    componentDidMount(){
        //console.log(this.props);
        let id = this.props.match.params.post_id
        this.setState({
            id:id

        });
    }
    render(){
        return(
            <div className ="container">
                <h1 className ="center">{this.state.id}</h1>
            </div>
        )
    }
}
export default Post;