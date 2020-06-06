import React from "react";
import axios from "axios";
import { Spinner } from "../..";

const DataLoader = (Component) =>
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        isLoading: false,
        error: "",
      };
    }

    componentDidMount() {
      this.fetchdata(this.props.url);
    }

    fetchdata(url) {
      this.setState((prevProps) => ({
        ...prevProps,
        isLoading: true,
      }));

      axios
        .get(url)
        .then(({ data }) => {
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

    render() {
      const { error, isLoading, data } = this.state;
      let content;

      if (error) {
        content = error;
      }

      if (isLoading) {
        content = <Spinner />;
      }

      if (data.length > 0 && Component) {
        content = <Component data={data} />;
      }

      return <>{content}</>;
    }
  };

export default DataLoader;
