import { useQuery, gql } from "@apollo/client";
import React from "react";
import "./Wall.css";
import { QUERY_POSTS } from "../../utils/queries";
// import { useEffect } from "react";


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
      <h1>Public Wall</h1>
      <h2>You can view the recent posts made by members of our community.</h2>

      <div id="post-list">
        {posts.map((post) => (
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              <h5 className="card-subtitle">{post.creator}</h5>
              <p className="card-text">{post.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wall;
