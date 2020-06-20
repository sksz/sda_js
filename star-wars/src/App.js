import React from 'react';
import PeoplePage from './pages/People';
import VehiclesPage from './pages/Vehicles';
import PlanetsPage from './pages/Planets';
import Navigation from './components/common/Navigation';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/people" component={PeoplePage} />
        <Route path="/vehicles" component={VehiclesPage} />
        <Route path="/planets" component={PlanetsPage} />
      </Switch>
    </div>
  );
}

export default App;
