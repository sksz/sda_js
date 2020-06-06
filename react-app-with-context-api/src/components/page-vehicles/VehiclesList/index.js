import React from "react";
import { DataLoader } from "../../HOCs";
import { CardItem } from "../..";

const VehiclesList = ({ data }) => (
  <>
    {data.map((vehicle) => (
      <CardItem type="vehicle" name={vehicle.name} key={vehicle.name} />
    ))}
  </>
);

export default DataLoader(VehiclesList);
