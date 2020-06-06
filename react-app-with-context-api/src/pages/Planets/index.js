import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { PlanetsList } from "../../components";

const PlanetsPage = () => {
  return (
    <main className="planets-page">
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h4" color="inherit" component="h2">
            Planets:
          </Typography>
          <PlanetsList url="https://swapi.dev/api/planets" />
        </Grid>
      </Grid>
    </main>
  );
};

export default PlanetsPage;
