
import * as React from 'react';
import { IconName } from '../icon/IconName';
import { Icon } from '../icon/Icon';

export interface Props {
  iconNames: IconName[];
  interval?: number;
}

export interface State {
  iconName: IconName;
  currentIconNameIndex: number;
}

export class TransitionIcon extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      iconName: props.iconNames[0],
      currentIconNameIndex: 0
    };
    setInterval(this.changeIconName, props.interval || 2000);
  }

  render() {
    return (
      <Icon iconName={this.state.iconName} />
    )
  }

  changeIconName = () => {
    const currentIconNameIndex = (this.state.currentIconNameIndex + 1) % this.props.iconNames.length;
    this.setState({
      iconName: this.props.iconNames[currentIconNameIndex],
      currentIconNameIndex
    })
  }

}