import React, { Component } from 'react';
// import axios from 'axios'
import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

//this is done to return a dynamically loaded component
//this saves memory by allowing us to load components only when needed. 
//these are not added to the main bundle, but added as needed.
const AsyncNewPost = asyncComponent(() =>{
    return import('./NewPost/NewPost');
});


class Blog extends Component {
   state ={
       auth:false
   }
  
    render () {
      

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                           {/*  We don't want to use an anchor tag </a> because
                            this will cause the entire application to reload
                            when a new link is visited. So we use the Link capability
                            to go to new pages */}
                            <li><NavLink 
                            to="/posts" 
                            exact
                            activeClassName="my-active"
                            activeStyle ={{
                                color:'#FA923F',
                                textDecoration: 'underline'
                            }}>
                            Posts</NavLink></li>
                            <li><NavLink to={{
                                ///this.props.match.url + '/new-post', this builds 
                                //a relative path. 
                                pathname: '/new-post',
                                hash: '#sumbit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=> <h1> Home</h1>}/>
                <Route path="/"  render={()=> <h1> Home 2</h1>}/> */}
               <Switch>
                   {/* //.auth is a guard for certain parts of the application for
                   unathenticated users */}
               {this.state.auth ? <Route path="/new-post"  component= {AsyncNewPost} /> :null}
               <Route path="/posts"  component= {Posts} />
               {/* //how to catch 404 pages, does not work with Redirect because the "from" catches all*/}
               <Route render={() => <h1> Not found </h1>} />
               {/* //from must be used in the Switch statement */}
               {/* <Redirect from="/" to="/posts" /> */}
               {/* <Route path="/"  component= {Posts} /> */}

                </Switch>
               
               
            </div>
        );
    }
}

export default Blog;