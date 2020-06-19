import React from "react";

const Button = ({ onClick, label }) => {
  console.log('button render');
  return (<button onClick={onClick}>{label}</button>);
}

export default Button;
