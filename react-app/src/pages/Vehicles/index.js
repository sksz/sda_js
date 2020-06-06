import React from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { Spinner } from "../../components";

class VehiclesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vehiclesList: [],
      isVehiclesListLoading: false,
      error: "",
    };
  }

  componentDidMount() {
    this.fetchVehiclesList();
  }

  fetchVehiclesList() {
    this.setState((prevProps) => ({
      ...prevProps,
      isVehiclesListLoading: true,
    }));

    axios
      .get("https://swapi.dev/api/vehicles")
      .then(({ data }) => {
        this.setState((prevProps) => ({
          ...prevProps,
          vehiclesList: data.results,
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
          isVehiclesListLoading: false,
        }));
      });
  }

  render() {
    const { error, isVehiclesListLoading, vehiclesList } = this.state;
    let content;

    if (error) {
      content = error;
    }

    if (isVehiclesListLoading) {
      content = <Spinner />;
    }

    if (vehiclesList.length > 0) {
      content = vehiclesList.map((vehicle) => <div>{vehicle.name}</div>); // to zamienić na komponent
    }

    return (
      <main className="vehicles-page">
        <Grid container>
          <Grid item xs={12} sm={8} md={6}>
            {content}
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default VehiclesPage;
