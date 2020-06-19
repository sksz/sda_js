import React from "react";
import { FORM_INPUTS } from "./constants";
import "./styles.css";

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      [FORM_INPUTS.NAME]: { // wszystkie meta dane formularza
        value: "",
        type: "text",
        name: FORM_INPUTS.NAME,
        isRequired: true,
        errorMessage: "",
        label: "Enter your name:",
      },
      [FORM_INPUTS.SURNAME]: {
        value: "",
        type: "text",
        name: FORM_INPUTS.SURNAME,
        isRequired: false,
        errorMessage: "",
        label: "Enter your surname:",
      },
      [FORM_INPUTS.EMAIL]: {
        value: "",
        type: "email",
        name: FORM_INPUTS.EMAIL,
        isRequired: true,
        errorMessage: "",
        label: "Enter your email:",
      },
    };
  }

  handleChange = (event) => {
    const { value, name, required } = event.target;
    const errorMessage = required && !value ? "Input is required" : "";
    console.log(name, value, required);

    this.setState(prevState => ({
      ...prevState, // kopiujemy cały poprzedni stan
      [name]: { // nadpisujemy wybrane pole
        ...prevState[name], // kopiujemy wszystkie wartości poprzedniego pola
        value, // nadpisujemy wybrane wartości
        errorMessage
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const inputName = this.state[FORM_INPUTS.NAME];
    const inputSurname = this.state[FORM_INPUTS.SURNAME];
    const inputEmail = this.state[FORM_INPUTS.EMAIL];

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form__input-wrapper'>
          <label htmlFor={inputName.name}>
            {inputName.label}
          </label>
          <input
            type={inputName.type}
            id={inputName.name}
            name={inputName.name}
            value={inputName.value}
            onChange={this.handleChange}
            required={inputName.isRequired}
          />
          {inputName.errorMessage && (
            <p className="form__input-error">{inputName.errorMessage}</p>
          )}
        </div>

        <div className='form__input-wrapper'>
          <label htmlFor={inputSurname.name}>
            {inputSurname.label}
          </label>
          <input
            type={inputSurname.type}
            id={inputSurname.name}
            name={inputSurname.name}
            value={inputSurname.value}
            onChange={this.handleChange}
            required={inputSurname.isRequired}
          />
          {inputSurname.errorMessage && (
            <p className="form__input-error">{inputSurname.errorMessage}</p>
          )}
        </div>

        <div className='form__input-wrapper'>
          <label htmlFor={inputEmail.name}>
            {inputName.label}
          </label>
          <input
            type={inputEmail.type}
            id={inputEmail.name}
            name={inputEmail.name}
            value={inputEmail.value}
            onChange={this.handleChange}
            required={inputEmail.isRequired}
          />
          {inputEmail.errorMessage && (
            <p className="form__input-error">{inputEmail.errorMessage}</p>
          )}
        </div>

        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default ControlledForm;
