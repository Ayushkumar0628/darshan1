import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css';
import { Button } from "@mui/material";

const Nav=()=>{
    return(
        <>
            <nav className="navbar">
            <div className="logo"> 
            <NavLink to='/'>
            <img src='images/logo.png' alt='DARSHAN' className='logo'/>
            </NavLink>
            </div>
            <div className="navlink">
                    <ul>
                        <NavLink to="/" className="navlinks" >Home</NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/shows" className="navlinks" >Shows</NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/contact" className="navlinks" >Contact</NavLink>
                    </ul>
                    <ul>
                        <NavLink to='/login'>
                        <Button variant="outlined" >Login</Button>
                        </NavLink>
                    </ul>
                    

            </div>
            </nav>
        </>
    );
}

export default Nav;