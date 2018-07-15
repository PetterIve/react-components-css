import * as classnames from 'classnames';
import * as React from 'react';

import './Col.css';

export interface Props {
  className?: string;
}

export class Col extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  public render () {
    const className = classnames(
      'col',
      this.props.className
    );
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}