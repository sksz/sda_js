import React from "react";
import Button from "./button";

class StateExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { // wstępna definicja state w konstruktorze
      counter: 0,
    };
  }

  increaseCounter = () => { // odpowiednik this.increaseCounter = this.increaseCounter.bind(this) w konstruktorze klasy
    // funkcja zawsze musi zwrócić >nowy< obiekt
    this.setState(prevProps => ({ counter: prevProps.counter + 1 })); // uzywamy prevProps do wyciągania poprzednich wartości
  };

  render() {
    console.log('render')
    return (
      <>
        <Button onClick={this.increaseCounter} label="Increase counter" />
        {this.state.counter}
      </>
    );
  }
}

export default StateExample;
