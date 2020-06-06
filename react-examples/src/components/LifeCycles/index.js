import React from "react";
import Button from "./button";

class LifeCycleExample extends React.Component {
  static getDerivedStateFromProps(newProps, newState) { // słuzy do zwracania nowego state na podstawie zaktualizowanych props-ów z rodzica !! jako funckja statyczna nie ma dostępu do 'this' !!
    console.log("getDerivedStateFromProps");
    return { ...newState }; // zawsze musi zwrócić >nowy< state
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

  shouldComponentUpdate(nextProps, nextState) { // słuzy do przerwania renderowania jezeli propsy się nie zmieniły
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
