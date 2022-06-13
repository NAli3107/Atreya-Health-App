import React from "react";
// hn
// import Login from "./components/form/LoginForm";
// import Signup from "./components/form/SignupForm";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Navbar from "./components/landingpage/Navbar";
import "./app.css";
 import yoga from "./images/yogo2.png";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
        {/* hn */}
      <Router>
<Navbar />
          </Router>
        {/* <Login />
        <Signup /> */}
        <img src={yoga} />
      </div>
    </ApolloProvider>
  );
}
export default App;
