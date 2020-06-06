import React from "react";
import DataLoader from "./Wrapper";

const RenderPropsExample = () => (
  <DataLoader>
    {(data) => data.map((item) => <div key={item}>{item}</div>)}
  </DataLoader>
);

export default RenderPropsExample;
