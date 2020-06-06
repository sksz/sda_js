import React from "react";
import DataLoaderWrapper from './wrapper';

const DataLoader = Component => ({ url }) => <DataLoaderWrapper component={Component} url={url} />

export default DataLoader;
