import React from "react";
import Post from "./post";
import Authors from "./authors";
import About from "./about";
import {Link} from 'react-router-dom';
import Search from "./search";

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = { posts: [], allPosts:[] };
        this.searchHandler=this.searchHandler.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({ posts:posts,
            allPosts:posts }))
    }
    searchHandler(searchString){
        console.log(searchString);

        let currentList=this.state.allPosts;

        if(searchString===""){
            this.setState({
                posts:currentList
            });
            return;
        }
        let filteredList=currentList.filter((item)=>{
            return item.title.includes(searchString);
        });
        this.setState({
            posts:filteredList
        })
    }


    render() {
        const posts = this.state.posts;
       

        if (posts.length === 0) {
            return <p>No posts</p>
        }

        return (
            <div>
                <Search onSearchRequested={this.searchHandler} instant={true}/>
               {posts.map((item) => {
                    return <Post post={item} key={item.id} />    

                })}
                


            </div>
        )
    }
}

export default Main;