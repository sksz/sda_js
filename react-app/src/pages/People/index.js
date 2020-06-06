import React from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { Spinner } from "../../components";

class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peopleList: [],
      isPeopleListLoading: false,
      error: "",
    };
  }

  componentDidMount() {
    this.fetchPeopleList();
  }

  fetchPeopleList() {
    this.setState((prevProps) => ({
      ...prevProps,
      isPeopleListLoading: true,
    }));

    axios
      .get("https://swapi.dev/api/people")
      .then(({ data }) => {
        this.setState((prevProps) => ({
          ...prevProps,
          peopleList: data.results,
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
          isPeopleListLoading: false,
        }));
      });
  }

  render() {
    const { error, isPeopleListLoading, peopleList } = this.state;
    let content;

    if (error) {
      content = error;
    }

    if (isPeopleListLoading) {
      content = <Spinner />;
    }

    if (peopleList.length > 0) {
      content = peopleList.map((person) => <div>{person.name}</div>); // to zamienić na komponent
    }

    return (
      <main className="people-page">
        <Grid container>
          <Grid item xs={12} sm={8} md={6}>
            {content}
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default PeoplePage;
