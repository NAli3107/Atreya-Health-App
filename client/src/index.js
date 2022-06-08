import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient} from "@apollo/client"

ReactDOM.render(<App /> , document.getElementById ('root'));

// hn
// const client = new ApolloClient({
//     uri: "http://localhost:3001/graphql",
//     cache: new InMemoryCache(),
//   });
  
  // ReactDOM.render(
  //   <ApolloProvider client={client}>
  //     <App />
  //   </ApolloProvider>,
  //   document.getElementById("root")
  // );