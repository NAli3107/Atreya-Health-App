import React from 'react'
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div  className="navbarWrapper">
                <div className="navbarLeft">
                    <span className="logo">Atreya</span>
                </div>
                <div className="navbarRight">
                    <span className="navbarIconBadge1">Home</span>
                </div>
                <div className="navbarRight">
                    <span className="navbarIconBadge2">Stay Connected</span>
                </div>
                <div className="navbarRight">
                    <span className="navbarIconBadge3">Stay Informed</span>
                </div>
                <div className="navbarRight">
                    <span className="navbarIconBadge4">Login/Signup</span>
                </div>
            </div>
        </div>
    )
}
