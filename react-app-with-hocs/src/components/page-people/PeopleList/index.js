import React from "react";
import DataLoader from "../../HOCs/DataLoader";

const PeopleList = ({ data }) => (
  <div>
    {data.map((character) => (
      <div>
        <h4>Character: {character.name}</h4>
      </div>
    ))}
  </div>
);

export default DataLoader(PeopleList);
