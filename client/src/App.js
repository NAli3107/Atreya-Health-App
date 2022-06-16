import React from 'react';
import Login from "./components/form/LoginForm";
import Signup from "./components/form/SignupForm";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import Navbar from'./components/landingpage/Navbar';
import "./app.css"



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
  
  <div className='hero'>
      <h2>“There is a crack in everything, that’s how the light gets in” ― Leonard Cohen</h2>
           
  </div>
  
    </div>
    </ApolloProvider>
  );
}
export default App;