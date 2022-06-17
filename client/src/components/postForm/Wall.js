import { useQuery, gql } from "@apollo/client";
import React, { useState } from 'react';
import "./Wall.css";
import { QUERY_POSTS } from "../../utils/queries";
import Auth from '../../utils/auth';
import moment from 'moment'
import { Navbar, Nav, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../form/SignupForm';
import LoginForm from '../form/LoginForm';
const timestamp = Date.now();


const Wall = () => {
  const [showModal, setShowModal] = useState(false);
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
      
      {Auth.loggedIn() ? (
                <>
          
                </>
              ) : 
              (
               <div> <Nav.Link onClick={() => setShowModal(true)}><p className="psign">Please sign in to add a post</p>
                </Nav.Link></div>
              )}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton >
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'></Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>


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
