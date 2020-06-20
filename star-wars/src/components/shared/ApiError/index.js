import React, { memo } from "react";
import Typography from "@material-ui/core/Typography";

const ApiError = ({ error }) => (
  <Typography variant="h6" color="error" component="p">
    {error}
  </Typography>
);

export default memo(ApiError);
