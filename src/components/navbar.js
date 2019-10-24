import React from 'react';
import './navbar.css';

const Navbar = props => {
    return(
        <nav className="navbar">
            <ul className="navbar__ul">
                <li><a className="nav__link" href="/" >Home</a></li>
                <li><a className="nav__link" href="/" >Chat</a></li>
                <li><a className="nav__link" href="/" >Members</a></li>
            </ul>
        </nav>
    )
}

export default Navbar