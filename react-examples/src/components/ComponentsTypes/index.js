import React, { Component } from "react";

class ComponentsTypesExamples extends Component { 
  /* !!!!!! metoda render jest wywoływna za kazdym razem gdy:
    * komponent jest montowany
    * stan komponentu (state) zostanie zaktualizowany
    * rodzic komponentu wywoła własną metodę render()
  */
  render() { // to co zwraca metoda render zostanie wyświetlonie na stronie, powinno być prawidłowym JSX-em
    return (
      <div>
        <ClassComponent userName="Zenon" />
        <FunctionalComponent userName="Zenon" />
      </div>
    );
  }
}

export default ComponentsTypesExamples;

class ClassComponent extends React.Component {
  render() {
    return (
      <div>I am a class component, Hello {this.props.userName}!</div>
    );
  }
}

const FunctionalComponent = ({ userName }) => <div>I am a functional component, Hello {userName}!</div>;
