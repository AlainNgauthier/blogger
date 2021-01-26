import React, { Component } from 'react';
import Comments from './Comments';

class PostPage extends Component{
    constructor(){
        super();
        this.state = {
            post: {},
            comments: []
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
         .then((response) => response.json())
         .then((json) => this.setState({ post: json}))

        
         fetch('https://jsonplaceholder.typicode.com/posts/'+ id +'/comments')
         .then((response) => response.json())
         .then((jsonComments) => this.setState({ comments: jsonComments}))
    }
    
    render(){

        let comments = this.state.comments.map((element, key) => 
            <Comments key={key} email={element.email} body={element.body} />                    
        )

        return(
            <div className="container post-container">
                <div className="post">
                    <h2>{this.state.post.title}</h2>
                    <p>{this.state.post.body}</p>
                </div>
                <div>
                    {comments}
                </div>
            </div>
        )
    }
}
export default PostPage;
