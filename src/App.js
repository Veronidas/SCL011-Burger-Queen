import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/home'
import Breakfast from './views/breakfast';
import Lunch from './views/lunch';


function App() {
  return (
    <div className="App">.
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/desayuno" component={Breakfast} />
        <Route exact path="/almuerzo" component={Lunch} />
      </Switch>
    </div>
  );
}

export default App;
