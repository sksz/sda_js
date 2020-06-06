import React from "react";

class DataLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const data = ['value1', 'value2', 'value3'] // dane które dostaliśmy z jakiegoś API
    this.setState(prevProps => ({
      ...prevProps,
      data
    }));
  }

  render() {
    return (
      <>
        {this.props.children(this.state.data)}
      </>
    );
  }
}

export default DataLoader;
