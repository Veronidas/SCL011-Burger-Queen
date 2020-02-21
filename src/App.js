import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/views/home';
import Breakfast from './components/views/breakfast';
import Lunch from './components/views/lunch';
import SignIn from './components/Auth/Signin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/desayuno" component={Breakfast} />
          <Route exact path="/almuerzo" component={Lunch} />
          <Route exact path="/signin" component={SignIn} />
          {/* <Route exact path="/signout" component={SignOut} /> */}


        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;