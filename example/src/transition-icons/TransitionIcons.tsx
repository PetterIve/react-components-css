import * as React from 'react';
import { IconName, TransitionIcon } from 'react-css-icons';

import { Col } from '../lib/col/Col';
import { Row } from '../lib/row/Row';

export const TransitionIcons = () => {
  return (
    <Col>
      <h1>Transition</h1>
      <Row>
        <TransitionIcon iconNames={[IconName.TV, IconName.LAPTOP, IconName.TABLET, IconName.MOBILE]} />
        <TransitionIcon iconNames={[IconName.LEFT_ALIGN, IconName.CENTER_ALIGN, IconName.RIGHT_ALIGN]} />
        <TransitionIcon iconNames={[IconName.ARROW_DOWN, IconName.ARROW_LEFT, IconName.ARROW_UP, IconName.ARROW_RIGHT]} />
      </Row>
    </Col>
  )
};