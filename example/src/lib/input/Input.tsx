import * as classnames from 'classnames';
import * as React from 'react';
import { Icon, IconName } from 'react-css-icons';

import './Input.css';

export interface Props {
  className?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  iconName?: IconName;
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
        {this.renderIcon()}
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

  private renderIcon = () => {
    return this.props.iconName
      ? <Icon className="search-icon" iconName={this.props.iconName}/>
      : null;
  }
}