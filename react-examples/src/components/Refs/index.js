import React from "react";
import './styles.css';

class RefsExample extends React.Component {
  constructor(props) {
    super(props);

    this.nodeElement = React.createRef();
  }

  handleEvent = (event) => {
    this.nodeElement.current.classList.toggle('example--dark')
  };

  render() {
    return (
      <div
        className="example"
        ref={this.nodeElement}
      >
        <button onClick={this.handleEvent}>Refs</button>
      </div>
    );
  }
}

export default RefsExample;

