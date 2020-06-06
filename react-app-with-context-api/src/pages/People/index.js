import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { PeopleList } from "../../components";

const PeoplePage = () => {
  return (
    <main className="people-page">
      <Grid container className="people-page__grid" justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h4" color="inherit" component="h2">
            Characters:
          </Typography>
          <PeopleList url="https://swapi.dev/api/people" />
        </Grid>
      </Grid>
    </main>
  );
};

export default PeoplePage;
