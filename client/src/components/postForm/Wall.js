import { useQuery, gql } from "@apollo/client";
import React from "react";
import "./Wall.css";
import { QUERY_POSTS } from "../../utils/queries";

import moment from 'moment'
const timestamp = Date.now();

const Wall = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
    if(loading){
        return(
            <h1>loading</h1>
        )
    }
  return (
    <div id="wall">
      <h1>Your Community</h1>
      <h2>Check out what the Community have to say here</h2>

      <div id="post-list">
        {posts.map((post) => (
            <div className=" cardbox card">
           <div class="thumbnail1 card-body">
              <h3 className="card-title">{post.title}</h3>
              <div className="pbody">
              <p className="card-text">{post.message}</p>
              </div>
              <h5 className="card-subtitle">Created by: {post.creator} on {moment({timestamp}).format('MMMM Do YYYY')}</h5>
            {/* <button className="edit">Edit</button>
            <button className="edit">Delete</button> */}
            </div>
            </div>

     
        ))}
      </div>

       
    </div>
  );
};

export default Wall;
