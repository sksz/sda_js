import React from "react";
import Allmodules, { testString, testObj, testArray, helloWorld } from './Exports';
import { testString as helpersString, testObj as helpersObj, testArray as helpersArray } from './Exports/helpers';
// *** importy zawsze definiowane są na samym początku pliku !!! ***

export default () => {
  console.log(testString, testObj, testArray, helloWorld);
  console.log('Helpers:', helpersString, helpersObj, helpersArray);
  console.log('Allmodules default export:', Allmodules);
  return null;
};
