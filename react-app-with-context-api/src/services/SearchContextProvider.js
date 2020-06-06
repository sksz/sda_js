import React, { createContext, Component } from "react";

const SearchContext = createContext({});

export class SearchContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      setSearchValue: (event) => {
        const { value } = event.target;
        this.setState((prevProps) => ({
          ...prevProps,
          searchValue: value,
        }));
      },
    };
  }

  render() {
    return (
      <SearchContext.Provider value={this.state}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export default SearchContext;
