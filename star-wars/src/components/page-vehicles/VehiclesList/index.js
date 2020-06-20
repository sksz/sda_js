import React from "react";
import DataLoader from "../../HOCs/DataLoader";
import CardItem from "../../shared/CardItem";

const VehiclesList = ({ data }) => (
  <section>
    {data.map(({ name }) => (
      <CardItem key={name} type="vehicle" name={name} />
    ))}
  </section>
)

export default DataLoader(VehiclesList)