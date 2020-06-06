import React from "react";
import DataLoader from "../../HOCs/DataLoader";

const VehiclesList = ({ data }) => (
  <div>
    {data.map((vehicle) => (
      <div>
        <h4>Vehicle: {vehicle.name}</h4>
      </div>
    ))}
  </div>
);

export default DataLoader(VehiclesList);
