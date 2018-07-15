import * as React from 'react';
import { IconName, IconToggle } from 'react-css-icons';

import { Col } from '../lib/col/Col';
import { Row } from '../lib/row/Row';

export const Toggles = () => {
  return (
    <Col>
      <h1>Toggle</h1>
      <Row>
        <IconToggle normalIconName={IconName.PIN} toggledIconName={IconName.CHAT}/>
        <IconToggle normalIconName={IconName.PLUS} toggledIconName={IconName.REMOVE}/>
        <IconToggle normalIconName={IconName.ARROW_RIGHT} toggledIconName={IconName.ARROW_LEFT}/>
        <IconToggle normalIconName={IconName.ARROW_UP} toggledIconName={IconName.ARROW_DOWN}/>

      </Row>
    </Col>
  )
};