<<<<<<< HEAD
import React from 'react';
import Login from "./components/Form/LoginForm";
import Signup from "./components/Form/SignupForm";
=======
//Importing these files to display
import React, { useCallback } from "react";
import Login from "./components/form/LoginForm";
import Signup from "./components/form/SignupForm";
>>>>>>> d9a7bd5520d8ac107cf02e72595931fe9a2ad01b
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import Navbar from'./components/landingpage/Navbar';
import "./app.css"
import yoga from './images/yoga.jpg';
<<<<<<< HEAD
import React from "react";
import Login from "./components/form/LoginForm";
import Signup from "./components/form/SignupForm";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Navbar from "./components/landingpage/Navbar";
import "./app.css";
import yoga from "./images/yoga.jpg";
=======
import { useAuthState } from "react-firebase-hooks/auth";
// import NavBar from './components/NavBar.js';
import NewPost from './components/NewPost.js';
import Wall from './components/Wall.js';
import SignIn from './components/SignIn.js';
import { setContext } from '@apollo/client/link/context';
import SignInModal from './components/SignInModal.js';
import { authentication } from './services/firebase-config';

import logo from './images/logo.png';

export let posts = [{
  id: '1',
  title: 'Demo Post!',
  description: 'Default post',
  timestamp: new Date().toISOString(),
  author: 'Atreya',
  postId: 'DEFAULT_POST',
  avatarURL: logo
}];
>>>>>>> d9a7bd5520d8ac107cf02e72595931fe9a2ad01b

const httpLink = createHttpLink({ uri: "graphql" });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [post, setPost] = React.useState(posts);
  const [displayModal, setDisplayModal] = React.useState(false);
  const [user] = useAuthState(authentication);

  const update = useCallback((newPosts) => {
    let post_arr = [];
    if (newPosts?.length > 1) {
      post_arr = [...newPosts, ...post]
    } else {
      post_arr = [newPosts, ...post]
    }
    setPost([...post_arr])
  }, [post]);

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  }

  return (
    <ApolloProvider client={client}>

    <div>
      <Navbar/>
      <Login/>
  <Signup/>
   <img src={yoga}/>
    </div>
    {/* <Wall posts={post} /> */}

      {/* <div>
        <Navbar />
        <Login />
        <Signup />
        <img src={yoga} />
      </div> */}
  <div className="app">
      <SignInModal display={displayModal} toggle={toggleModal} />
      {/* <NavBar toggle={toggleModal} logged_in={user ? true : false} /> */}
      {user ? <NewPost onUpdate={update} toggle={toggleModal} /> : <SignIn />}
      <Wall posts={post} />
      {/* <Footer /> */}
    </div>

    </ApolloProvider>
  );
}
export default App;
