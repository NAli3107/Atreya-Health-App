
import React from "react";
import './dashboard.css';
// TODO
// import { timeAgo } from 'short-time-ago';
const Post = ({ props }) => {
    return <div className="post">
        <h1>{"props.title"}</h1>
        <p>{"props.description"}</p>
        <div id="post-author">
            <img src={"props.avatarURL"} alt="Author Avatar" />
            <p>{"props.author"}</p>
        </div>
//     TODO
        {/* <p><em>Posted - {timeAgo(new Date(props.timestamp))}</em></p> */}
    </div>
}

export default Post;
