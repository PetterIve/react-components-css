import * as React from 'react';
import { IconName, ToggleIcon } from 'react-css-icons';

import { Col } from '../lib/col/Col';
import { Row } from '../lib/row/Row';

const header = '<Toggle>';
const transitionTrue = 'transition={true}'
const transitionFalse = 'transition={false}'

export class Toggles extends React.Component {
  public render() {
    return (
      <Col>
        <h1>{header}</h1>
        <h2>{transitionTrue}</h2>
        {this.renderToggles(true)}
        <h2>{transitionFalse}</h2>
        {this.renderToggles(false)}
      </Col>
    )
  }

  private renderToggle = (firstName: IconName, secondName: IconName, transition: boolean) => {
    return <ToggleIcon normalIconName={firstName} toggledIconName={secondName} transition={transition}/>
  }

  private renderToggles = (transition: boolean) => {
    return (
      <Row>
        {this.renderToggle(IconName.PIN, IconName.CHAT, transition)}
        {this.renderToggle(IconName.PLUS, IconName.REMOVE, transition)}
        {this.renderToggle(IconName.ARROW_RIGHT, IconName.ARROW_LEFT, transition)}
        {this.renderToggle(IconName.ARROW_UP, IconName.ARROW_DOWN, transition)}
        {this.renderToggle(IconName.MINUS, IconName.ARROW_DOWN, transition)}
        {this.renderToggle(IconName.PLUS, IconName.MINUS, transition)}
        {this.renderToggle(IconName.CHECK, IconName.MINUS, transition)}
        {this.renderToggle(IconName.LEFT_ALIGN, IconName.RIGHT_ALIGN, transition)}
      </Row>
    )
  }
};