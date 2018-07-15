import * as React from 'react';
import { IconName } from '../icon/IconName';
import { Icon } from '../icon/Icon';

export interface Props {
  normalIconName: IconName;
  toggledIconName: IconName;

  onToggled?: () => void;
  isToggled?: boolean;
}

export interface State {
  toggled: boolean;
}

export class ToggleIcon extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toggled: false
    }
  }

  render() {
    return (
      <Icon
        iconName={this.state.toggled ? this.props.toggledIconName : this.props.normalIconName}
        onClick={this.toggle}
        transition={true}
      />
    );
  }

  isToggled = () => {
    if(this.props.isToggled === undefined) {
      return this.state.toggled;
    } else {
      return this.props.isToggled;
    }
  };

  toggle = () => {
    if (this.props.onToggled) {
      this.props.onToggled();
    } else {
      this.setState({toggled: !this.state.toggled});
    }
  }
}