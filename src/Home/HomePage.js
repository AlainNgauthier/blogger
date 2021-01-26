import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Post from './Post';

class HomePage extends Component{
    constructor(){
        super()
        this.state = { posts: [] }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
         .then((response) => response.json())
         .then((json) => this.setState({ posts : json}))
    }

    render(){

        let posts = this.state.posts.map((element, key) => 
            <Post key={key} id={element.id} title={element.title} description={element.body} />
        )

        return(
            <div>
                <h2>HomePage</h2>
                <div className="container articles-container">
                   {posts}
                </div>
            </div>
        )
    }
    
}

export default HomePage;