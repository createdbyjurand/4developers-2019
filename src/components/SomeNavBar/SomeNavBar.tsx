import * as React from 'react';
import './SomeNavBar.css';

// Context
import { AppContext } from 'src/App';

const href = () => undefined; // javascript:void(0)

const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
  let repeats = 0;

  const wait = (milliseconds: number) => setTimeout(() => {
    /////////////////////////// console.log ///////////////////////////
    console.log(repeats++);
    ref.current != null
      ? ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
      : wait(milliseconds);
  }, milliseconds);

  wait(100);
};

const SomeNavBar = () => {
  const appContextHook = React.useContext(AppContext);

  return (
    <nav
      ref={appContextHook.SomeNavBarRef}
    >
      <ul className="SomeNavBar-ul">
        <li className="SomeNavBar-li">
          <a
            className="SomeNavBar-a"
            href={href()}
            onMouseDown={e => {
              e.preventDefault();
              scrollToRef(appContextHook.SomeNavBarRef);
            }}
          >
            scrollIntoView<br />appContextHook.SomeNavBarRef
          </a>
        </li>
        <li className="SomeNavBar-li">
          <a
            className="SomeNavBar-a"
            href={href()}
            onMouseDown={e => {
              e.preventDefault();
              scrollToRef(appContextHook.SomeComponentWithHooksRef);
            }}
          >
            scrollIntoView<br />appContextHook.SomeComponentWithHooksRef
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SomeNavBar;
