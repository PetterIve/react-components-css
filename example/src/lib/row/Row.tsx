import * as classnames from 'classnames';
import * as React from 'react';

import './Row.css';

export interface Props {
  className?: string;
}

export class Row extends React.Component<Props> {
  
  constructor(props: Props) {
    super(props);
  }

  public render () {
    const className = classnames(
      'row',
      this.props.className
    );
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}