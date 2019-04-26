import * as React from 'react';
//import styles from './Button.module.scss';
const styles = require('./Button.module.scss');

export interface ButtonProps {
  value: string;  
  primary?: boolean;
  disabled?: boolean;   
  block?: boolean;
  onClick?(e: React.MouseEvent<any, MouseEvent>): void;
}

export interface ButtonState {
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
    };    
  }

  public render() {
    let classes = `${this.props.primary ? styles.primary : styles.secondary} 
                   ${this.props.disabled ? this.props.primary ? styles['primary-disabled'] : styles['secondary-disabled'] : ''}`;
    return (      
      <button
        className={classes}
        onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
