import React, { useEffect, useState } from "react";

const HookedComponent = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // initialize 3rd party script
    window.p3.setup({
      onResize: resizeCallbackHandler
    });
  }, []);

  // for no real reason...
  useEffect(() => {
    console.log(`BAD: updated counter to ${value}`);
  }, [value]);

  const doCounter = () => {
    setValue(value + 1);
  };

  const resizeCallbackHandler = () => {
    console.log(`BAD: handle callback from 3rd party: value is ${value}`);
  };

  return (
    <>
      <h2>Not working...</h2>
      <h3>{value}</h3>
      <button type="button" onClick={doCounter}>
        Update Value
      </button>
    </>
  );
};

export default HookedComponent;
