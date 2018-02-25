import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post'
import './Posts.css';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost'
// import {Link} from 'react-router-dom';

class Posts extends Component {

    state={
        posts:[],
       
    }

    //will be reexecuted each time we reload the page
    componentDidMount(){
        console.log(this.props);
        axios.get('posts')
            .then(response =>{
                const posts = response.data.slice(0,4);
                const updatedPost = posts.map(post =>{
                    return{
                        ...post,
                        author: 'Ebonie'
                    }
                })
                this.setState({posts: updatedPost});
                console.log(response)
            });
    }

   
    postSelectedHandler = (id)=>{
        // this.setState({selectedPostId: id});
        this.props.history.push({pathname: '/posts/' +id });
    }

    render (){
        let posts = this.state.posts.map(post =>{
            return (
                // <Link 
                // to={'/' +post.id}
                // key= {post.id} >
                    <Post 
                        clicked={() => this.postSelectedHandler(post.id)}
                        key= {post.id}
                        title={post.title}
                        author={post.author}/>
                // </Link>
            
            );
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                  {/* /: tells the Route that the url is dynamic. This 
                can interefere with other urls, so place at bottom do the 
                other urls are loaded first. */}
                <Route path={this.props.match.url + "/:id"} exact component= {FullPost} />
            </div>

       
        
        );
    }
}

export default Posts