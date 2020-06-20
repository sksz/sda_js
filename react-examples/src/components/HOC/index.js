import React from "react";
import HOCExample from "./HOC-Component";

const FormsExample = ({ propsFromHOC }) => (
  <>
    props from HOC: {propsFromHOC}
  </>
);

export default HOCExample(FormsExample);
