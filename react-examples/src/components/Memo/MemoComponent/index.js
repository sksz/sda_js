import React from "react";

const MemoComponent = ({ valueFromParent }) => {
  console.log("memo component render");
  return (
    <p>
      Jestem MemoComponent, nie lubię blokować procesora jakimiś pierdołami!
      <strong>{valueFromParent}</strong>
    </p>
  );
};

export default React.memo(MemoComponent);
