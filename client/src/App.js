
import React from 'react';
import Login from "./components/Form/LoginForm";
import Signup from "./components/Form/SignupForm";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import Navbar from'./components/landingpage/Navbar';
import "./app.css"
import yoga from './images/yoga.jpg';

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
  return (
    <ApolloProvider client={client}>

    <div>
      <Navbar/>
      <Login/>
  <Signup/>
   <img src={yoga}/>
    </div>
    <Wall posts={post} />

      <div>
        <Navbar />
        <Login />
        <Signup />
        <img src={yoga} />
      </div>

    </ApolloProvider>
  );
}
export default App;
