import React from "react";
import { Grid } from "@material-ui/core";
import PeopleList from "../components/page-people/PeopleList";

const PeoplePage = () => (
  <main>
    <h2>People</h2>
    <Grid container justify="center">
      <Grid item xs={12} sm={8} md={6}>
        <PeopleList url="https://swapi.dev/api/people" />
      </Grid>
    </Grid>
  </main>
);

export default PeoplePage;
