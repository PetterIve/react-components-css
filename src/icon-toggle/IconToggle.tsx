import * as React from 'react';
import { IconName } from '../icon/IconName';
import { Icon } from '../icon/Icon';

export interface ToggleProps {
  normalIconName: IconName;
  toggledIconName: IconName;

  onToggled?: () => void;
  isToggled?: boolean;
}

export interface ToggleState {
  toggled: boolean;
}

export class IconToggle extends React.Component<ToggleProps, ToggleState> {
  constructor(props: ToggleProps) {
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
        animated={true}
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