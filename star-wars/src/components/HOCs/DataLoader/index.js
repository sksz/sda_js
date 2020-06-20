import React, { Component } from "react";
import axios from "axios";
import ApiError from "../../shared/ApiError";
import Spinner from "../../shared/Spinner";

const DataLoader = WrappedComponent =>
class extends Component {
  state = {
    data: [],
    isLoading: false,
    error: "",
  };

  fetchData() {
    this.setState((prevProps) => ({
      ...prevProps,
      isLoading: true,
    }));

    axios(this.props.url)
      .then(({ data }) => {
        console.log("data object after succesfull request:", data);
        this.setState((prevProps) => ({
          ...prevProps,
          data: data.results,
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
          isLoading: false,
        }));
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    console.log(this.state);
    const { error, isLoading, data } = this.state;

    let content;

    if (error) {
      content = <ApiError error={error} />;
    } else if (isLoading) {
      content = <Spinner size={40} />;
    } else {
      content = <WrappedComponent data={data} />
    }

    return <>{content}</>

  }
}

export default DataLoader;
