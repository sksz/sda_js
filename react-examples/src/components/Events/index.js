import React from "react";

class EventsExample extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.handleEvent = this.handleEvent.bind(this);
  // }

  // handleEvent(event) {
  //   console.log('event:', event.type)
  //   console.log('context:', this); // undefined
  // }

  handleEvent = (event) => {
    console.log("event:", event.type);
    console.log("context:", this);
  };

  render() {
    return (
      <>
        <div
          style={{ backgroundColor: "red", height: "100px" }}
          onClick={this.handleEvent}
          onMouseDown={this.handleEvent}
          onMouseEnter={this.handleEvent}
          onMouseLeave={this.handleEvent}
          onDragStart={this.handleEvent}
          onDragEnd={this.handleEvent}
          draggable
        >
          Events
        </div>
      </>
    );
  }
}

export default EventsExample;
