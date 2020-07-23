import React, { Component } from 'react';
//import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import {Route, NavLink} from 'react-router-dom';

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
                        to="/" 
                        exact 
                        activeClassName="my-active"
                        activeStyle={{
                            color: "orange",
                            textDecoration: "underline"
                        }}>Home</NavLink></li>
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
            <Route path="/" exact component={Posts} />
            <Route path="/new-post" component={NewPost} />

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