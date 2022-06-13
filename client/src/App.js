import React from 'react';
import Login from "./components/form/LoginForm";
import Signup from "./components/form/SignupForm";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import Navbar from'./components/landingpage/Navbar';
import "./app.css"
import yoga from './images/yoga.jpg';
import BeInformed from './components/beInformed/BeInformed'
import Testimonials from './components/testimonials/Testimonials'



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
      <BeInformed/>
      <Testimonials/>

   <img src={yoga}/>
    </div>
    </ApolloProvider>
  );
}
export default App;