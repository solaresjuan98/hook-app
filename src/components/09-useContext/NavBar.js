import React from 'react';
import {  NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <NavLink to="/" className="navbar-brand">useContext</NavLink>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink to="./home" exact activeClassName="active" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="./about" exact activeClassName="active" className="nav-link" >About</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="./login" exact activeClassName="active" className="nav-link" >Login</NavLink>
                    </li>

                </ul>

            </div>
        </nav>
    )
}
