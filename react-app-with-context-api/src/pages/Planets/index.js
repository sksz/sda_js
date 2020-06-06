import React from "react";
import { Grid } from "@material-ui/core";
import { PlanetsList } from "../../components";

const PlanetsPage = () => {
  return (
    <main className="planets-page">
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <PlanetsList url="https://swapi.dev/api/planets" />
        </Grid>
      </Grid>
    </main>
  );
};

export default PlanetsPage;
