import React from 'react';
import Navbar from'./components/landingpage/Navbar';
import Sidebar from './components/landingpage/Sidebar';
import "./app.css"

function App() {
  return (
    <div>
      <Navbar />
        <div className="container">
          <Sidebar/>
          other pages
        </div>
    
    </div>
    );
}
export default App;