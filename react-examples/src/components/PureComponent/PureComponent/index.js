import React from "react";

// class PureComponent extends React.Component {
//   render() {
//     console.log("not pure component render");
//     return (
//       <p>
//         Nie jestem PureComponent, lubię blokować procesor jakimiś
//         pierdołami! <strong>{this.props.valueFromParent}</strong>
//       </p>
//     );
//   }
// }

// PureComponent posiada swoją implementację shouldComponentUpdate która uzywa porownania na podstawie referencji: oldProps === newProps
class PureComponent extends React.PureComponent { 
  render() {
    console.log("pure component render");
    return (
      <p>
        Jestem PureComponent, nie lubię blokować procesora jakimiś
        pierdołami! <strong>{this.props.valueFromParent}</strong>
      </p>
    );
  }
}

export default PureComponent;
