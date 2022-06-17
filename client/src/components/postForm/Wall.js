import { useQuery, gql } from "@apollo/client";
import React from "react";
import "./Wall.css";
import { QUERY_POSTS } from "../../utils/queries";
// import { useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

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

            <div className=" cardbox card">


{/*          
           <div className="card-body"> */}
           <div class="thumbnail1 card-body">
              <h3 className="card-title">{post.title}</h3>
              <div className="pbody">
              <p className="card-text">{post.message}</p>
              </div>
              <h5 className="card-subtitle">{post.creator}</h5>
            </div>
            </div>

  // </div>
//   <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>{post.title}</Card.Title>
//     <Card.Text>
//     {post.message}
//     </Card.Text>
//   </Card.Body>
// </Card>

     
        ))}
      </div>

       
    </div>
  );
};

export default Wall;
