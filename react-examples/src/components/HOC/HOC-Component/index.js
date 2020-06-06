import React from "react";
/**
  HOC to funkcja która przyjmuje jako parametr komponent1 i zwraca inny komponent2 który opakuje danymi komponent1
**/
const HOCExample = (WrappedComponent) =>
  class extends React.Component {

    render() {
      return (
        <div>
          <h1>HOC</h1>
          <WrappedComponent propsFromHOC="heyo" />
        </div>
      );
    }
  };

export default HOCExample;
