import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignInLinks';
import SignedOutLinks from './SignOutLinks';



const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link className="brand-logo" exact activeClassName="active-link" to="/">  Home  </Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
}

export default Navbar;