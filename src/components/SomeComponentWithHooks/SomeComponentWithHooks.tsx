import * as React from 'react';
import './SomeComponentWithHooks.css';
// Context
import { AppContext } from 'src/App';

const SomeComponentWithHooks = () => {
  // Hook
  const AppContextHook = React.useContext(AppContext);

  return (
    <div
      ref={AppContextHook.SomeComponentWithHooksRef}
    >
      {AppContextHook.SomeComponentWithHooksTitle}
    </div>
  );
};

export default SomeComponentWithHooks;
