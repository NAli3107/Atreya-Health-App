import React from 'react';
import Login from "./components/Form/LoginForm";
import Signup from "./components/Form/SignupForm";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import './App.css';

const httpLink = createHttpLink({uri: "graphql"});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (

    <ApolloProvider client={client}>
    <div className="App">
      <h1>Hello Doctors</h1>
      <Login/>
<Signup/>
    </div>
    </ApolloProvider>
  );
}
export default App;