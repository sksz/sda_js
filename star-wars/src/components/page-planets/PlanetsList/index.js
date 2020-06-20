import React from "react";
import DataLoader from "../../HOCs/DataLoader";
import CardItem from "../../shared/CardItem";

const PlanetsList = ({ data }) => (
  <section>
    {data.map(({ name }) => (
      <CardItem key={name} type="planets" name={name} />
    ))}
  </section>
)

export default DataLoader(PlanetsList)