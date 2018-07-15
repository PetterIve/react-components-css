import * as React from 'react';
import { IconName, TransitionIcon } from 'react-css-icons';

import { Col } from '../lib/col/Col';
import { Row } from '../lib/row/Row';

const header = '<TransitionIcon>';
const transitionTrue = 'transition={true}'
const transitionFalse = 'transition={false}'

export class TransitionIcons extends React.Component {
  public render () {
    return (
      <Col>
        <h1>{header}</h1>
        <h2>{transitionTrue}</h2>
        {this.renderTransitions(true)}
        <h2>{transitionFalse}</h2>
        {this.renderTransitions(false)}
      </Col>
    )
  }

  private renderTransition = (iconNames: IconName[], transition: boolean) => {
    return (
      <TransitionIcon
        iconNames={iconNames}
        transition={transition}
      />
    )
  }

  private renderTransitions = (transition: boolean) => {
    return (
      <Row>
        {this.renderTransition([IconName.TV, IconName.LAPTOP, IconName.TABLET, IconName.MOBILE], transition)}
        {this.renderTransition([IconName.ARROW_DOWN, IconName.ARROW_LEFT, IconName.ARROW_UP, IconName.ARROW_RIGHT], transition)}
        {this.renderTransition([IconName.MINUS, IconName.CHECK], transition)}
        {this.renderTransition([IconName.LEFT_ALIGN, IconName.CENTER_ALIGN, IconName.RIGHT_ALIGN], transition)}
      </Row>
    )
  }
};