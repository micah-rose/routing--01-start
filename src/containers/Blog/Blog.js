import React, { Component } from 'react';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
//import Post from '../../components/Post/Post';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    render () {

        return (
            <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li><NavLink 
                        to="/posts/" 
                        exact 
                        activeClassName="my-active"
                        activeStyle={{
                            color: "orange",
                            textDecoration: "underline"
                        }}>Posts</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/new-post",
                            hash: "#submit",
                            search: "?quick-submit=true"
                        }}>New Post</NavLink></li>
                    </ul>
                </nav>
            </header>
            {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
            <Route path="/" render={() => <h1>Home 2</h1>}/> */}
                       
            <Switch>
                <Route path="/new-post" component={NewPost} />
                <Route path="/posts" component={Posts} />
                <Redirect from="/" to="/posts" />
                {/* <Route path="/" component={Posts} /> */}
            </Switch>

            {/* <section>
            <FullPost id={this.state.selectedPostId} />
            </section>
            <section>
            <NewPost />
            </section> */}

            </div>
        );
    }
}

export default Blog;