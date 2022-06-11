

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../form/SignupForm';
import LoginForm from '../form/LoginForm';
import "./navbar.css"
import Auth from '../../utils/auth';
import "./UserIn.css"

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
       <div className="navbar">
            <div  className="navbarWrapper">
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
        <div className="navbarRight">
          <Navbar.Brand as={Link} to='/home'>
          <span className="navbarIconBadge1">Home</span>
          </Navbar.Brand>
          </div>
{/*   
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'> */}
          
            <Nav className='ml-auto'>
            <div className="navbarRight">
              <Nav.Link as={Link} to='/'>
              <span className="navbarIconBadge3">Stay Informed</span>
              </Nav.Link>
              </div>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                 <div className="navbarRight">
                  <Nav.Link as={Link} to='/BLOG'>
                   Stay Connected
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </div>
                </>
                
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
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
      </div>
      </div>
    </>
  );
};

export default AppNavbar;