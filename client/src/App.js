import React from 'react';
import Login from "./components/form/LoginForm";
import Signup from "./components/form/SignupForm";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import Navbar from'./components/landingpage/Navbar';
import "./app.css";
import logo  from './images/tri.png';


console.log(logo);
function Header(){
  return <img src={logo} alt="Logo" />;
}
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
    </div>
    </ApolloProvider>
  );
}
export default App;