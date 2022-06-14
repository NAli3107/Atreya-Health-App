// import React from 'react'
// import "./navbar.css"

// export default function Navbar() {
//     return (
//         <div className="navbar">
//             <div  className="navbarWrapper">
//                 <div className="navbarLeft">
//                     <span className="logo">Atreya</span>
//                 </div>
//                 <div className="navbarRight">
//                     <span className="navbarIconBadge1">Home</span>
//                 </div>
//                 <div className="navbarRight">
//                     <span className="navbarIconBadge2">Stay Connected</span>
//                 </div>
//                 <div className="navbarRight">
//                     <span className="navbarIconBadge3">Stay Informed</span>
//                 </div>
//                 <div className="navbarRight">
//                     <span className="navbarIconBadge4">Login/Signup</span>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React from "react";
import "./navbar.css"
import { authentication } from "../services/firebase-config";

import anonymous from '../images/default.png';

const NavBar = ({logged_in, toggle}) => {
    const signOut = () => {
        if(authentication.currentUser) {
            authentication.signOut();
        }
    }
    return logged_in ? <div id="hero">
        <nav>
            
            <h1 className="subhero">Home Page</h1>
            <div id="user-logged" onClick={signOut}>
                <img
                    src={authentication.currentUser.photoURL ? authentication.currentUser.photoURL : anonymous}
                    id="user_account"
                    rel="noreferrer"
                    alt="Your Avatar"
                />
                <h2>{authentication.currentUser.displayName ? authentication.currentUser.displayName : 'Demo User'}</h2>

            </div>
        </nav>
    </div>: <div id="hero">
        <nav>
        
            <h1 className="subhero">Home Page</h1>
            <button type="button" onClick={toggle}>Login</button>
            <div className="navbarRight">
//                     <span className="navbarIconBadge2">Stay Connected</span>
//                 </div>
//                 <div className="navbarRight">
//                     <span className="navbarIconBadge3">Stay Informed</span>
//                 </div>
        </nav>
    </div>
}

export default NavBar;
