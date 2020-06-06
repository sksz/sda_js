import React from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { Spinner } from "../../components";

class PlanetsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planetsList: [],
      isPlanetsListLoading: false,
      error: "",
    };
  }

  componentDidMount() {
    this.fetchPlanetsList();
  }

  fetchPlanetsList() {
    this.setState((prevProps) => ({
      ...prevProps,
      isPlanetsListLoading: true,
    }));

    axios
      .get("https://swapi.dev/api/planets")
      .then(({ data }) => {
        this.setState((prevProps) => ({
          ...prevProps,
          planetsList: data.results,
        }));
      })
      .catch(() => {
        this.setState((prevProps) => ({
          ...prevProps,
          error: "Error occured please try again later",
        }));
      })
      .finally(() => {
        this.setState((prevProps) => ({
          ...prevProps,
          isPlanetsListLoading: false,
        }));
      });
  }

  render() {
    const { error, isPlanetsListLoading, planetsList } = this.state;
    let content;

    if (error) {
      content = error;
    }

    if (isPlanetsListLoading) {
      content = <Spinner />;
    }

    if (planetsList.length > 0) {
      content = planetsList.map((planet) => <div>{planet.name}</div>); // to zamienić na komponent
    }

    return (
      <main className="planets-page">
        <Grid container>
          <Grid item xs={12} sm={8} md={6}>
            {content}
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default PlanetsPage;
