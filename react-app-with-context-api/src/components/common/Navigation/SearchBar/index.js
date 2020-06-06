import React from "react";
import { withStyles, createStyles } from "@material-ui/styles";
import { InputBase } from "@material-ui/core";
import SearchContext from "../../../../services/SearchContextProvider";

const styles = createStyles({
  search: {
    position: "relative",
    borderRadius: 0,
    backgroundColor: "#fff",
    margin: "0 10px",
    paddingLeft: "15px",
    "@media (min-width:600px)": {
      marginLeft: "15px",
      width: "auto",
    },
  },
});

const SearchBar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.search}>
      <SearchContext.Consumer>
        {({ searchValue, setSearchValue }) => (
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={setSearchValue}
            value={searchValue}
          />
        )}
      </SearchContext.Consumer>
    </div>
  );
};

export default withStyles(styles)(SearchBar);
