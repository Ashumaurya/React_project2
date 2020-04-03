import React, { Component } from 'react';
import axios from 'axios';

//class to display post
class Post extends Component{
    state ={
       post: null
    }
    componentDidMount(){
        //console.log(this.props);
        let id = this.props.match.params.post_id
        //lets get the post with id 
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id) // we gave the id of the post we click so the post it will show with the same id 
        .then(data =>{
           // console.log(data)
           this.setState({
            post : data.data  //*we are setting our post data to the data we get from axios with the specific id  */}

        });

        });
       
    }
    render(){
        const post = this.state.post?(
            <div className = "post">
                <h1 className = "center">{this.state.post.title}</h1>
                <p className="container">{this.state.post.body}</p>
            </div>
        ):(
            <div className = "center"> Your  post is loading.......</div>
        )
        return(
            <div className ="container">
               {post}
            </div>
        )
    }
}
export default Post;