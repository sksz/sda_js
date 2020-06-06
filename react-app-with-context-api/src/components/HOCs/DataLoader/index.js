import React from "react";
import axios from "axios";
import { Spinner } from "../..";
import SearchContext from "../../../services/SearchContextProvider";

const DataLoader = (Component) => {
  class DataLoaderWrapper extends React.Component {
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
        content = (
          <Component
            data={data.filter((item) =>
              item.name.toLowerCase().includes(this.context.searchValue)
            )}
          />
        );
      }

      return <>{content}</>;
    }
  }

  DataLoaderWrapper.contextType = SearchContext;

  return DataLoaderWrapper;
};

export default DataLoader;
