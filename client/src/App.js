import React from "react";
// hn
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
 import yoga from "./images/yogo2.png";
 import StayInformed from "./pages/Stayinformed"
 import Home from "./pages/Home"
 import StayConnected from "./pages/StayConnected"
import NewPost from "./components/postForm/NewPost"
import Dashboard from "./components/postForm/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatBot from "./components/chatbot/chatbot";

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
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stayinformed" element={<StayInformed />} />
          <Route path="/stayconnected" element={<StayConnected />} />
          <Route path="/chat" element={<ChatBot />} />
          <Route path="/Newpost" element={<NewPost />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
          </Router>
        <img src={yoga} />

      </div>
    </ApolloProvider>
  );
}
export default App;