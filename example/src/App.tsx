import * as React from 'react';
import { initCss } from 'react-css-icons';

import { Toggles } from './icon-toggles/Toggles';
import { Icons } from './icons/Icons';
import { Col } from './lib/col/Col';
import { TransitionIcons } from './transition-icons/TransitionIcons';

import './App.css';

initCss();

class App extends React.Component {
  public render() {
    return (
      <Col>
        <Icons />
        <Toggles />
        <TransitionIcons />
      </Col>
    )
  }
}

export default App;
