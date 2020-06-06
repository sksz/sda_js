import React from "react";
import DataLoader from "../../HOCs/DataLoader";

const PlanetsList = ({ data }) => (
  <div>
    {data.map((planet) => (
      <div>
        <h4>Planet: {planet.name}</h4>
      </div>
    ))}
  </div>
);

export default DataLoader(PlanetsList);
