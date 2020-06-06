import React from "react";
import { FORM_INPUTS } from "./constants";

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);

    this.formNode = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formValues = {};

    Array.from(this.formNode.current.elements).forEach(element => {
      if (element.tagName === "INPUT") {
        formValues[element.name] = element.value;
      }
    })

    console.log('formValues', formValues)
  };

  render() {
    return (
      <form ref={this.formNode} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name={FORM_INPUTS.NAME}
        />
        <input
          type="text"
          name={FORM_INPUTS.SURNAME}
        />
        <input
          type="text"
          name={FORM_INPUTS.EMAIL}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default UncontrolledForm;
