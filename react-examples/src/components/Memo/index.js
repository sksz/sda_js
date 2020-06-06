import React from "react";
import MemoComponent from "./MemoComponent";
import Button from "./button";

class PureComponentExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increaseCounter = () => {
    this.setState((prevProps) => ({ counter: prevProps.counter + 1 }));
  };

  render() {
    console.log("parent component render");
    return (
      <>
        <div>
          <Button onClick={this.increaseCounter} label="Increase counter" />
          {this.state.counter}
        </div>
        
        <MemoComponent valueFromParent='nie zmieniam się!'/>
      </>
    );
  }
}

export default PureComponentExample;
