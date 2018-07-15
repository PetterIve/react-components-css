import * as React from 'react';
import { IconName } from '../icon/IconName';
import { Icon } from '../icon/Icon';

export interface ToggleIconProps {
  normalIconName: IconName;
  toggledIconName: IconName;
  transition?: boolean;

  isToggled?: boolean;
  onToggled?: () => void;
}

export interface ToggleIconState {
  toggled: boolean;
}

export class ToggleIcon extends React.Component<ToggleIconProps, ToggleIconState> {
  constructor(props: ToggleIconProps) {
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
        transition={this.props.transition}
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