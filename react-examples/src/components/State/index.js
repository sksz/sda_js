import React from "react";
import Button from "./button";

class StateExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { // wstępna definicja state w konstruktorze
      counter: 0, // domyslna wartość początkowa
    };
  }

  increaseCounter = () => { // odpowiednik this.increaseCounter = this.increaseCounter.bind(this) w konstruktorze klasy
    // funkcja zawsze musi zwrócić >nowy< obiekt
    // this.state.counter++; // nadpisywanie w bezpośredni sposób jest nie dozwolone
    this.setState(prevState => ({ counter: prevState.counter + 1 })); // uzywamy prevProps do wyciągania poprzednich wartości
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
