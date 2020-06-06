import React, { memo } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./styles.css";

const Spinner = ({ size = 40 }) => (
  <div className="spinner-overlay">
    <CircularProgress size={size} />
  </div>
);

export default memo(Spinner);
