import React from "react";
import Post from './Post.js';
import './styles/Wall.css';

// The area to display the posts and form functionality 
const Wall = ({ posts }) => {
    return <div id="wall">
        <h1>Safe space </h1>
        <h2>You are able to use this as a safe space to talk and express your feelings</h2>

        <div id="post-list">
            {posts.slice(0, 5).map(p => <Post key={p.postId} props={p} />)}
        </div>
    </div>
}

export default Wall;