import React from "react";

class JsxExample extends React.Component {
  render() {
    // Prawidłowo:
    // const pElement = <p>{this.props.props1}</p>;

    // return (
    //   <div> 
    //     {pElement}
    //   </div>
    // );

    // Źle:
    // return (
    //   <div>
    //     JSX
    //   </div>
    //   <div> 
    //     JSX
    //   </div>
    // );

    // Prawidłowo:
    // return (
    //   <>
    //     <div> 
    //       JSX
    //     </div>
    //     <div> 
    //       JSX
    //     </div>
    //   </>
    // );

    // Prawidłowo:
    // return (
    //   <div>
    //     <div> 
    //       JSX
    //     </div>
    //     <div> 
    //       JSX
    //     </div>
    //   </div>
    // );

    // Prawidłowo:
    // return 'tekst';

    // Prawidłowo:
    // return null;

    // Źle:
    // return undefined;

    const { props } = this;
    const { props1, props2 } = props;

    const test1 = (props1 === 'test' && 'hello world'); // jezeli całe wyrazenie jest prawdziwe, to zostanie zwrócona wartość która znajduje się na końcu;
    const test2 = props1 !== 'test' && 'hello world';
    console.log(test1, test2);

    return (
      <div>
        <div>example1: {props1 === 'test' && <h3>JSX props1 is test</h3>}</div>
        <div>example2: {props1 === 'test' ? 'JSX props1 is test' : `JSX props1 is not test: ${props1}`}</div>
        <div>example3: {Array.isArray(props2) && props2.length > 0 && props2.map(value => <span>{value}</span>)}</div>
      </div>
    );
  }
}

export default JsxExample;
