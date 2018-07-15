import * as React from 'react';
import { IconName, ToggleIcon } from 'react-css-icons';

import { Col } from '../lib/col/Col';
import { Row } from '../lib/row/Row';

export const Toggles = () => {
  return (
    <Col>
      <h1>Toggle</h1>
      <Row>
        <ToggleIcon normalIconName={IconName.PIN} toggledIconName={IconName.CHAT}/>
        <ToggleIcon normalIconName={IconName.PLUS} toggledIconName={IconName.REMOVE}/>
        <ToggleIcon normalIconName={IconName.ARROW_RIGHT} toggledIconName={IconName.ARROW_LEFT}/>
        <ToggleIcon normalIconName={IconName.ARROW_UP} toggledIconName={IconName.ARROW_DOWN}/>

      </Row>
    </Col>
  )
};