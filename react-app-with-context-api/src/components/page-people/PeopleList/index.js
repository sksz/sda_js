import React from "react";
import { DataLoader } from "../../HOCs";
import { CardItem } from "../..";

const PeopleList = ({ data }) => (
  <>
    {data.map((character) => (
      <CardItem type="character" name={character.name} key={character.name} />
    ))}
  </>
);

export default DataLoader(PeopleList);
