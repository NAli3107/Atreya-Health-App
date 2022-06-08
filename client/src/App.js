import React from 'react';
import Login from "./components/form/LoginForm"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (

    <ApolloProvider client={client}>
    <div className="App">
      <h1>Hello Doctors</h1>
      <Login/>

    </div>
    </ApolloProvider>
  );
}
export default App;