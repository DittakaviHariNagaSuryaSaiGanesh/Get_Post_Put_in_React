import React, { Component } from 'react'
import axios from 'axios';
// const PostList = () => {
//   return (
//     <div>
//         <h1>List of Posts</h1>
//     </div>
//   )
// }

// const componentDidMount =() =>{

// }


// export default PostList 


class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: []
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          post: res.data
        })
        console.log(res.data);
      })
  }

  render() {
    const { post } = this.state
    return (
      <div>
        <h1>List of Post</h1>
        {
          post.map(posts => <div key={posts.id}>{posts.title}</div>)
        }
      </div>
    )
  }
}

export default PostList