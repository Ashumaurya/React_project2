import React, { Component } from 'react';
// import axios from 'axios'
import { Link }from 'react-router-dom';
import {connect} from 'react-redux'

class  Home extends Component {
    // state = {
    //     posts : [ ]
    // }

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res =>{
    //        // console.log(res)
    //        this.setState({
    //            posts : res.data.slice(0,5)
    //        });
    //     })
    // }
    

  render(){
     // const{posts} = this.state; // {posts} used for destructuring the posts and getting data from it.
 
    
     const{posts} = this.props;
      const postlist = posts.length ? (
          posts.map(post=>{
              return(
              <div className = "post card" key = "{post.id}">
              <div className ="card-content">
              <Link to = {'/'+post.id}> {/* this link to post's id  */}
                  <span className = "card-title">{post.title}</span>
                  </Link>
                  <p>{post.body}</p>
              </div>
              

              </div>)
              
          })
      ):(
      <div className = "center" >
      <p> There are no posts </p>
       </div>
       );
    return(
        <div className = "container">
            <h1 className = "center"> Home </h1>
            {postlist}
        </div>
    )
  }
}
const mapStatetoProps = (state)=>{
    return{posts : state.posts}
        
    
}

export default  connect(mapStatetoProps ) (Home); // we are using high order component + we pasding mapStatetoProps as 
                                                // a parameter to that that function is now connected to redux