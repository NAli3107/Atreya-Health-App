import React from 'react';
import Login from "./components/Form/LoginForm";
import Signup from "./components/Form/SignupForm";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import Navbar from'./components/landingpage/Navbar';
import "./app.css"
import yoga from './images/yoga.jpg';

const httpLink = createHttpLink({uri: "graphql"});

const client = new ApolloClient({
  link: httpLink,
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
    </ApolloProvider>
  );
}
export default App;