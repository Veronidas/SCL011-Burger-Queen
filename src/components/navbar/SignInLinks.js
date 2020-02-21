import React from 'react';
import { NavLink } from 'react-router-dom';
// import Home from '../views/home';
// import Breakfast from '../views/breakfast';
// import Lunch from '../views/lunch';

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink exact activeClassName="active-link" to="/desayuno">  Desayuno  </NavLink></li>
                <li><NavLink exact activeClassName="active-link" to="/almuerzo">  Almuerzo  </NavLink></li>
                <li><NavLink className="btn pink lighten-1" exact activeClassName="active-link" to="/signin">  Sign In  </NavLink></li>
                <li><NavLink className="btn pink lighten-1" exact activeClassName="active-link" to="/signout"> Sign Out </NavLink>
                </li>
            </ul>
            {/* <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/desayuno" component={Breakfast} />
                <Route exact path="/almuerzo" component={Lunch} />
            </Switch> */}
        </div>
    )

}

export default SignedInLinks;