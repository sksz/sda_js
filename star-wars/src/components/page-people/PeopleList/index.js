import React from "react";
import DataLoader from "../../HOCs/DataLoader";
import CardItem from "../../shared/CardItem";

const PeopleList = ({ data }) => (
  <section>
    {data.map(({ name }) => (
      <CardItem key={name} type="character" name={name} />
    ))}
  </section>
)

export default DataLoader(PeopleList)