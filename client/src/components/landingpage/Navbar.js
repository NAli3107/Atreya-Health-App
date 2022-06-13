

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Modal, Tab } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
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
            <div className="navbarLeft">
                    <span className="logo">Atreya</span>
                </div>
                
      <Navbar bg='dark' variant='dark' expand='lg'>
            <Nav className='ml-auto'>

              <ul>
 <li className="navbarIconBadge">  <Link to="/"> Home </Link></li>
        <li className="navbarIconBadge"> <CustomLink to="/stayinformed">Stay Informed</CustomLink></li>          
        
        </ul>

              {Auth.loggedIn() ? (
                <>
      
                 <li className="navbarIconBadge">  <CustomLink to="/stayconnected">Stay Connected</CustomLink></li>
                 
  
                  <Nav.Link onClick={Auth.logout}><li className="navbarIconBadge"> Logout</li></Nav.Link>
                 
                </>
      
              ) : (
                <div className="navbarRight">
                <Nav.Link onClick={() => setShowModal(true)}><li className="navbarIconBadge">Login/Sign Up</li>
                </Nav.Link>
                </div>
              )}

             
          
            </Nav>
      </Navbar>

      
      {/* set modal data up */}
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
      </div>
      </div>
    </>
  );
};

export default AppNavbar;


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}