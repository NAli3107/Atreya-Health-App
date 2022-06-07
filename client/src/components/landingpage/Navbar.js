import React from 'react'
import "./navbar.css"
import {LogoutIcon} from '@mui/icons-material/Logout';
export default function Navbar() {
    return (
        <div className="navbar">
            <div  className="navbarWrapper">
                <div className="navbarLeft">
                    <span className="logo">Atreya</span>
                </div>
                <div className="navbarRight">
                    <div className="navbarIconContainer">
                        <LogoutIcon/>
                        <span className="navbarIconBag">2</span>
                    </div>
                    </div>
            </div>

        </div>
    )
   }
