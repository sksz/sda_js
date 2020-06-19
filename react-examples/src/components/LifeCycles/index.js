import React from "react";
import Button from "./button";

class LifeCycleExample extends React.Component {
  // słuzy do zwracania nowego state na podstawie zaktualizowanych props-ów z rodzica !!
  // jako funckja statyczna nie ma dostępu do 'this' !!
  // uruchamia się gdy aktualizuje się rodzic lub zmienia się stan komponentu
  static getDerivedStateFromProps(newProps, newState) {
    console.log("getDerivedStateFromProps");
    return { ...newState }; // zawsze musi zwrócić >nowy< stan
  }

  constructor(props) {
    console.log('constructor')
    super(props);

    this.state = { // wstępna definicja state w konstruktorze
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  shouldComponentUpdate(nextProps, nextState) { // słuzy do zadecydowania czy komponent po zaktualizowaniu ma wywołać render()
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true; // zawsze musi zwracać true lub false!
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  increaseCounter = () => { // odpowiednik this.increaseCounter = this.increaseCounter.bind(this) w konstruktorze klasy
    this.setState((prevProps) => ({ counter: prevProps.counter + 1 }));
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

export default LifeCycleExample;
