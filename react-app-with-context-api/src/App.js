import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Navigation } from "./components";
import PeoplePage from "./pages/People";
import PlanetsPage from "./pages/Planets";
import VehiclesPage from "./pages/Vehicles";
import { SearchContextProvider } from "./services/SearchContextProvider";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchContextProvider>
          <Navigation />
          <Switch>
            <Route path="/vehicles" component={VehiclesPage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/people" component={PeoplePage} />
          </Switch>
        </SearchContextProvider>
      </div>
    );
  }
}

export default App;
