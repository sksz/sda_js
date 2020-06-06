import React from "react";
import HOCExampleWrapper from './wrapper';

const HOCExample = Component => () => <HOCExampleWrapper component={Component} />

export default HOCExample;
