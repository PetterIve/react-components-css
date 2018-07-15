import * as React from 'react';
import { Icon, IconName } from 'react-css-icons';

import { Col } from '../lib/col/Col';
import { Input } from '../lib/input/Input';
import { Row } from '../lib/row/Row';

import './Icons.css';

interface Props {

}

interface State {
  search: string;
}

export class Icons extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      search: ''
    }
  }
  public render () {
    return (
      <Col>
        <h1>Icons</h1>
        <Input
          className="search-input"
          iconName={IconName.SEARCH}
          label="Search"
          value={this.state.search}
          onChange={this.onSearchChanged}
        />
        <Row className="icon-container">
          {this.renderIcons()}
        </Row>
      </Col>
    )
  }
  private renderIcons = () => Object.keys(IconName)
    .filter(this.filterSearch)
    .map(key => {
      return (
        <Col key={key}>
          <Icon iconName={IconName[key] as IconName} />
          <div>{IconName[key].toLowerCase()}</div>
        </Col>
      )
    });

  private filterSearch = (key: string) => {
    if (this.state.search.length === 0) {
      return true;
    } else {
      const iconName = IconName[key].toString();
      return iconName.toLowerCase().includes(this.state.search.toLowerCase());
    }
  }

  private onSearchChanged = (search: string) => {
    this.setState({search});
  }
};