import React, { Component } from 'react';
import ExportImportExample from './components/ExportImportExample';
import JsxExample from './components/JSX';
import ComponentsTypesExample from './components/ComponentsTypes';
import LifeCyclesExample from './components/LifeCycles';
import StateExample from './components/State';
import EventsExample from './components/Events';
import RefsExample from './components/Refs';
import FormsExample from './components/Forms';
import HOCExample from './components/HOC';
import RenderPropsExample from './components/RenderProps';
import HomeWork from './components/HomeWork';
import PureComponentExample from './components/PureComponent';
import MemoComponentExample from './components/Memo';

class App extends Component {
  render () {
    return (
      <div className="App">
        {/* <ExportImportExample /> */}
        {/* <ComponentsTypesExample /> */}
        {/* <JsxExample props1='test' props2={['test1', 'test2', 'test3']} /> */}
        {/* <EventsExample /> */}
        {/* <RefsExample /> */}
        {/* <StateExample /> */}
        {/* <HomeWork /> */}
        {/* <FormsExample /> */}
        {/* <LifeCyclesExample /> */}
        {/* <PureComponentExample /> */}
        {/* <MemoComponentExample /> */}
        {/* <HOCExample /> */}
        <RenderPropsExample />
      </div>
    );
  }
}

export default App;
