import React from "react";
import { FORM_INPUTS } from "./constants";
import "./styles.css";

function createInputStructure(
  initialValue,
  inputType,
  inputName,
  isRequired,
  label
) {
  return {
    value: initialValue,
    type: inputType,
    name: inputName,
    isRequired,
    errorMessage: "",
    label
  };
}

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      [FORM_INPUTS.NAME]: createInputStructure("dupa", "text", FORM_INPUTS.NAME, true, "Enter your name:"),
      [FORM_INPUTS.SURNAME]: createInputStructure("", "text", FORM_INPUTS.SURNAME, false, "Enter your surname:"),
      [FORM_INPUTS.EMAIL]: createInputStructure("", "email", FORM_INPUTS.EMAIL, true, "Enter your email:"),
    };
  }

  handleChange = (event) => {
    const { value, name: inputName, required } = event.target;
    const errorMessage = required && !value ? "Value is required" : "";
    console.log(inputName, value, required, errorMessage);

    this.setState((prevState) => ({
      ...prevState, // kopiujemy cały poprzedni stan === { name, surname, email }
      [inputName]: {
        // nadpisujemy wybrane pole
        ...prevState[inputName], // kopiujemy wszystkie wartości poprzedniego pola
        value, // nadpisujemy wybrane wartości
        errorMessage,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  renderInput(inputData) {
    return (
      <div className="form__input-wrapper">
        <label htmlFor={inputData.name}>{inputData.label}</label>
        <input
          type={inputData.type}
          id={inputData.name}
          name={inputData.name}
          value={inputData.value}
          onChange={this.handleChange}
          required={inputData.isRequired}
        />
        {inputData.errorMessage && (
          <p className="form__input-error">{inputData.errorMessage}</p>
        )}
      </div>
    );
  }

  render() {
    const inputName = this.state[FORM_INPUTS.NAME];
    const inputSurname = this.state[FORM_INPUTS.SURNAME];
    const inputEmail = this.state[FORM_INPUTS.EMAIL];

    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput(inputName)}
        {this.renderInput(inputSurname)}
        {this.renderInput(inputEmail)}

        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default ControlledForm;
