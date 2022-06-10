import React from 'react';
import Login from "./components/form/LoginForm";
import Signup from "./components/form/SignupForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import './App.css';
import Navbar from "./components/suma-com/Navbar";


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
      {/* <Login/>
<Signup/> */}
<Router>
<Navbar />
{/* <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/saved" element={<Signup />} />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            /> */}
          {/* </Routes> */}
          </Router>
    </div>

    </ApolloProvider>
  );
}
export default App;