import React from "react";

class HOCExampleWrapper extends React.Component {
  render() {
    return (
      <this.props.component propsFromHOC='heyo' />
    );
  }
}

export default HOCExampleWrapper;
