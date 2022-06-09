import React from 'react';
import Navbar from'./components/landingpage/Navbar';
import "./app.css"
import yoga from "./images/yoga.jpg"

function App() {
  return (
    <div>
      <Navbar />
      <p>"I believe that the greatest gift you can give your family and the world 
        is a healthy you"</p>
        <img src={yoga}></img>
    </div>
  
    );
}
export default App;