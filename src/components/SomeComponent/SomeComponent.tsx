import * as React from 'react';
import './SomeComponent.css';
// Context
import { AppContext } from 'src/App';

const SomeComponent = () =>
  <AppContext.Consumer>
    {AppContextValue => (
      <div>
        {AppContextValue.SomeComponentTitle}
      </div>
    )}
  </AppContext.Consumer>;

export default SomeComponent;
