import * as classnames from 'classnames';
import * as React from 'react';
import { IconName, ToggleIcon } from 'react-css-icons';

import './Input.css';

export interface Props {
  className?: string;
  label: string;
  value: string;
  iconName?: IconName;

  clearInput: () => void;
  onChange: (value: string) => void;
}

export interface State {
  focused: boolean;
}

export class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      focused: false
    }
  }

  public render () {
    const labelClassName = classnames(
      'input-label',
      {focused: this.state.focused || this.props.value.length > 0}
    );
    const wrapperClassName = classnames(
      'input-wrapper',
      this.props.className
    );
    return (
      <div className={wrapperClassName}>
        <input
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          className='input'
          type="text"
          value={this.props.value}
          onChange={this.parseValue}
        />
        <label className={labelClassName}>{this.props.label}</label>
        <ToggleIcon
          className="search-icon"
          normalIconName={IconName.SEARCH}
          toggledIconName={IconName.REMOVE}
          isToggled={this.props.value.length > 0}
          onToggled={this.props.clearInput}
          transition={false}
        />
      </div>
    )
  }

  private onBlur = async () => {
    this.setState({ focused: false });
  };

  private onFocus = async () => {
    this.setState({ focused: true });
  };

  private parseValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value);
  };

}