import React from "react";
import HOCExample from "./HOC-Component";

const FormsExample = (props) => (
  <>
    props from HOC: {props.propsFromHOC}
  </>
);

export default HOCExample(FormsExample);
