import * as React from 'react';
import './SomeComponentWithStateHook.css';

const SomeComponentWithStateHook = () => {
  // Hook
  const [something, setSomething] = React.useState(15);

  return (
    <div>
      {`SomeComponentWithStateHook, something(${something})`}
    </div>
  );
};

export default SomeComponentWithStateHook;
