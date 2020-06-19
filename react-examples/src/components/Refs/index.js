import React from "react";
import './styles.css';

class RefsExample extends React.Component {
  constructor(props) {
    super(props);

    this.nodeElement = React.createRef(); // Tworzymy w konstruktorze pustą referencje reakta;
  }

  handleEvent = (event) => {
    this.nodeElement.current.classList.toggle('example--dark')
    // document.querySelector('.example').classList.toggle('example--dark'); ZŁEEEEEEE !!!!!!!!!!!
  };

  render() {
    return (
      <div
        className="example"
        ref={this.nodeElement} // wstawiamy div do this.nodeElement
      >
        <button onClick={this.handleEvent}>Refs</button>
      </div>
    );
  }
}

export default RefsExample;

