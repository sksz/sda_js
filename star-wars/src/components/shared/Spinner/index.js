import React, { memo } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./styles.css";

const Spinner = (props) => (
  <div className="spinner">
    <CircularProgress {...props} />
  </div>
);

export default memo(Spinner);
