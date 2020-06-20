import React from "react";
import { Grid } from "@material-ui/core";
import VehiclesList from "../components/page-vehicles/VehiclesList";

const VehiclesPage = () => (
  <main>
    <h2>Vehicles</h2>
    <Grid container justify="center">
      <Grid item xs={12} sm={8} md={6}>
        <VehiclesList url="https://swapi.dev/api/vehicles" />
      </Grid>
    </Grid>
  </main>
);

export default VehiclesPage;
