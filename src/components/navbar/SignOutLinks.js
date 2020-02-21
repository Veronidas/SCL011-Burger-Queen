import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink className="btn pink lighten-1" exact activeClassName="active-link" to="/signin">  Sign In  </NavLink></li>
                <li><NavLink className="btn pink lighten-1" exact activeClassName="active-link" to="/signup"> Sign Up </NavLink></li>
            </ul>
        </div>
    )

}


export default SignedOutLinks;