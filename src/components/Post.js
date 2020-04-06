import React, { Component } from 'react';
import {connect} from 'react-redux';
//import axios from 'axios';

//class to display post
class Post extends Component{
    // state ={
    //    post: null
    // }
    // componentDidMount(){
    //     //console.log(this.props);
    //     let id = this.props.match.params.post_id
    //     //lets get the post with id 
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id) // we gave the id of the post we click so the post it will show with the same id 
    //     .then(data =>{
    //        // console.log(data)
    //        this.setState({
    //         post : data.data  //*we are setting our post data to the data we get from axios with the specific id  */}

    //     });

    //     });
       
    // }
    handleClick=()=>{
        this.props.deletepost(this.props.post.id); // we are passing the id from the props into delete function
        this.props.history.push('/'); // we are pusing back to home after delete button is clicked 

    }
    render(){
        console.log(this.props);
        const post = this.props.post?(
            <div className = "post">
                <h1 className = "center">{this.props.post.title}</h1>
                <p className="container">{this.props.post.body}</p>
                <div className="center">
                <button className="btn grey" onClick={this.handleClick}>
                            Delete Post
                </button>
        </div>
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
const mapStatetoprops = (state , ownProps) => {
    let id = ownProps.match.params.post_id

    return{
        post:state.posts.find(post => post.id === id)  // post => post.id === id can aslo be written as (post)=>{
    //                                                                                                        return { 
   //                                                                                                           post.id === id ;
  //                                                                                                                                  }      
 //                                                                                                                  }
    }
}
const mapDispatchtoprops = (dispatch) =>{
    return {
        deletepost : (id) => dispatch({   // function as a object 
            type : 'Delete_post' ,
            id : id

        })
    }
}
export default connect(mapStatetoprops,mapDispatchtoprops) (Post);