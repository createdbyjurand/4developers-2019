import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import SomeComponent from 'src/components/SomeComponent/SomeComponent';
import SomeComponentWithHooks from 'src/components/SomeComponentWithHooks/SomeComponentWithHooks';
import SomeComponentWithStateHook from 'src/components/SomeComponentWithStateHook/SomeComponentWithStateHook';
import SomeNavBar from 'src/components/SomeNavBar/SomeNavBar';

// Context
export const appContext = {
  AppTitle: 'appContext.AppTitle',
  SomeComponentTitle: 'appContext.SomeComponentTitle',
  SomeComponentWithHooksTitle: 'appContext.SomeComponentWithHooksTitle',
  changeAppTitle: (newTitle: string, hookToContext: any) => hookToContext.AppTitle = newTitle,

  // Refs
  SomeComponentWithHooksRef: React.createRef<HTMLDivElement>(),
  SomeNavBarRef: React.createRef<HTMLDivElement>(),
};
export const AppContext = React.createContext(appContext);

interface IProps { }

interface IState {
  b: boolean;
  reRenderAppState: () => void;
}
export const AppStateContext = React.createContext({} as IState);

// export default class App extends React.Component<{}, State> {
export default class App extends React.Component<IProps, IState> {

  //   constructor(props = {}) {
  constructor(props: IProps) {
    super(props);

    this.state = {
      b: true,
      reRenderAppState: () => this.setState({ b: !this.state.b }),
    };
  }

  public render = () =>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
      </header>
      <section>
        <AppStateContext.Provider value={this.state}>
          <AppContext.Provider value={appContext}>
            <ul className="App-ul">
              <li className="App-li"><code><SomeNavBar /></code></li>
              <li className="App-li"><code>{appContext.AppTitle}</code></li>
              <li className="App-li"><code><SomeComponent /></code></li>
              <li className="App-li"><code><SomeComponentWithHooks /></code></li>
              <li className="App-li"><code><SomeComponentWithStateHook /></code></li>
            </ul>
          </AppContext.Provider>
        </AppStateContext.Provider>
      </section>
    </div>
}
