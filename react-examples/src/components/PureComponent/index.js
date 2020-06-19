import React from "react";
import PureComponent from "./PureComponent";
import Button from "./button";

class PureComponentExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    // this.array = ['test string'];
  }

  increaseCounter = () => {
    this.setState((prevProps) => ({ counter: prevProps.counter + 1 }));
  };

  render() {
    console.log("parent component render");
    // const array = ['test string'];

    return (
      <>
        <div>
          <Button onClick={this.increaseCounter} label="Increase counter" />
          {this.state.counter}
        </div>
        
        <PureComponent valueFromParent='nie zmieniam się!' />

        {/* @array przy kadym wywołaniu render() zwraca nową tablicę, porównanie oldProps === newProps nie zadziała!!! */}
        {/* <PureComponent valueFromParent={array} /> */}

        {/* @this.array przy kadym wywołaniu render() zwraca przez referencję tę samą tablicę co wcześniej, porównanie oldProps === newProps będzie dalej działać */}
        {/* <PureComponent valueFromParent={this.array} /> */}
      </>
    );
  }
}

export default PureComponentExample;
