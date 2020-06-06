import React from "react";
import { DataLoader } from "../../HOCs";
import { CardItem } from "../..";

const PlanetsList = ({ data }) => (
  <>
    {data.map((planet) => (
      <CardItem type="planet" name={planet.name} key={planet.name} />
    ))}
  </>
);

export default DataLoader(PlanetsList);
