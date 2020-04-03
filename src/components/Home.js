import React, { Component } from 'react';
import axios from 'axios'

class  Home extends Component {
    state = {
        posts : [ ]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
           // console.log(res)
           this.setState({
               post : res.data.slice(0,5)
           });
        })
    }
  render(){
    return(
        <div className = "container">
            <h1 className = "center"> Home </h1>
            <p className = "container centre">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur quam quis gravida convallis. Maecenas pretium pretium faucibus. Nullam elementum fringilla elit, ut condimentum ipsum faucibus eu. Donec egestas nibh ornare lectus volutpat, in volutpat turpis malesuada. Nulla sagittis nisl vel ligula tincidunt congue. Ut vel quam egestas, rutrum tellus non, interdum magna. Duis facilisis lacus et orci pulvinar fringilla. Nunc et sapien a purus fermentum faucibus sed pellentesque diam. </p>
        </div>
    )
  }
}
export default Home;